import { AplicationError } from "@/protocols";

export function conflictError(message: string): AplicationError {
    return {
        name: "ConflictError",
        message,
    };
}
