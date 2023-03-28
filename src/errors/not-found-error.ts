import { AplicationError } from "@/protocols";

export function notFoundError(message: string): AplicationError {
    return {
        name: "NotFoundError",
        message,
    };
}
