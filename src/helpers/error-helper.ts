import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof error.message === 'string'
  );
}

export function getErrorMessage(error: FetchBaseQueryError | SerializedError): string | undefined {
  if (isFetchBaseQueryError(error)) {
    const errorMessage = 'error' in error ? error.error : (error.data as string);
    return errorMessage;
  } else if (isErrorWithMessage(error)) {
    return error.message;
  }
}
