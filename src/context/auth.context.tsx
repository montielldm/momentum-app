import { useContext, createContext, useState, useEffect, useCallback } from "react";
import type { AuthResponse, User } from "@/types/auth.types";
import { api } from "@/helpers/axios.instance";
import requestNewAccessToken from "@/helpers/axios.instance";

// Almacenamiento seguro (encriptación básica)
const secureStorage = {
  set: (key: string, value: string) =>
    localStorage.setItem(key, window.btoa(JSON.stringify(value))),
  get: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(window.atob(item)) : null;
  },
  remove: (key: string) => localStorage.removeItem(key),
};

// Definición del contexto
interface AuthContextType {
  isAuthenticated: boolean;
  getAccessToken: () => string | null;
  setAccessTokenAndRefreshToken: (accessToken: string, refreshToken: string) => void;
  getRefreshToken: () => string | null;
  saveUser: (userData: AuthResponse) => void;
  getUser: () => User | undefined;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Proveedor de autenticación
interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>();
  const [accessToken, setAccessToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Obtener el access token actual
  const getAccessToken = useCallback(() => accessToken, [accessToken]);

  // Guardar usuario y tokens
  const saveUser = useCallback((userData: AuthResponse) => {
    setAccessTokenAndRefreshToken(userData.access_token, userData.refresh_token);
    setUser(userData.user);
    setIsAuthenticated(true);
  }, []);

  // Establecer tokens y actualizar headers de Axios
  const setAccessTokenAndRefreshToken = useCallback((accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    secureStorage.set("token", refreshToken);
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }, []);

  // Obtener el refresh token
  const getRefreshToken = useCallback(() => {
    const token = secureStorage.get("token");
    return token || null;
  }, []);

  // Obtener un nuevo access token usando el refresh token
  const getNewAccessToken = useCallback(async (refreshToken: string) => {
    try {
      const token = await requestNewAccessToken(refreshToken);
      if (token) {
        setAccessToken(token); // Actualiza el access token en el estado
        secureStorage.set("token", refreshToken); // Almacena el nuevo refresh token
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Actualiza los headers de Axios
      }
      return token;
    } catch (error) {
      signout();
      window.location.href = "/auth/login";
      return null;
    }
  }, []);

  // Obtener información del usuario
  const getUser = useCallback(() => user, [user]);

  // Cerrar sesión
  const signout = useCallback(() => {
    secureStorage.remove("token");
    setAccessToken("");
    setUser(undefined);
    setIsAuthenticated(false);
    delete api.defaults.headers.common["Authorization"];
  }, []);

  // Interceptor para manejar tokens expirados
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          const newToken = await getNewAccessToken(getRefreshToken()!);
          if (newToken) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest); // Reintenta la solicitud original
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [getNewAccessToken, getRefreshToken]);

  // Verificar autenticación al montar el componente
  const checkAuth = useCallback(async () => {
    try {
      const token = secureStorage.get("token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      let validToken: string | null = accessToken;
      if (!validToken) {
        validToken = await getNewAccessToken(token);
        if (!validToken) throw new Error("Refresh failed");
        setAccessToken(validToken);
      }

      const userInfo = await retrieveUserInfo(validToken);
      setUser(userInfo);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Error en checkAuth:", error);
      signout();
    } finally {
      setIsLoading(false);
    }
  }, [accessToken, getNewAccessToken, signout]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        setAccessTokenAndRefreshToken,
        getRefreshToken,
        saveUser,
        getUser,
        signout,
      }}
    >
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

// Obtener información del usuario desde el API
async function retrieveUserInfo(accessToken: string) {
  try {
    const response = await api.get("/auth/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error retrieving user info:", error);
    throw error; // Propaga el error para manejarlo en checkAuth
  }
}

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);