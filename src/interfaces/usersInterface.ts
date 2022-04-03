export interface UsersDetails {
    username: string,
    lastname: string,
    email: string,
    password: string,
    secretQuestion: string,
    secretAnswer: string
}

export interface UserResult {
    username?: string,
    password?:string,
    email?:string,
    errorDescription?: string
}