import axios from "axios"
import { AccessTokenResponse } from "@/types/auth.types";
export const URL = "http://localhost:8000"

export const api = axios.create({
    baseURL: URL
})

export default async function requestNewAccessToken(refreshToken: string) {
  const response = await fetch(`${URL}/auth/refresh-token?refresh_token=${refreshToken}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (response.ok) {
    const json = (await response.json()) as AccessTokenResponse;

    return json.access_token;
  } else {
    throw new Error("Unable to refresh access token.");
  }
}