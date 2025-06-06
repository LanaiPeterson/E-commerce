export class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AppError';
    }
}

export function handleError(error: unknown): void {
    if (error instanceof AppError) {
        console.error('App Error:', error.message);
    } else {
        console.error('Unexpected Error:', error);
    }
}