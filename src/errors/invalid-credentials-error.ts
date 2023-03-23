import { AplicationError } from "@/protocols";

export function invalidCredentialsError(): AplicationError {
    return {
        name: "InvalidCredentialsError",
        message: "Email ou senha incorretos",
    };
}
