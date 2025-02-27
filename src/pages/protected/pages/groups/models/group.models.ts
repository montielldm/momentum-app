export interface GroupsByUser {
    id: string
    name: string
    modality: string
    description: string
    program: ProgramByUser
    amount_apprentinces: number
    amount_instructors: number
}
  
export interface ProgramByUser {
    id: string
    code: string
    name: string
    type: string
    duration: number
    timing_system: string
}