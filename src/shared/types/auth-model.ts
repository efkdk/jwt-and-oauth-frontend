import { UserSchema } from './user-model';
import { z } from 'zod';

export const AuthResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: UserSchema,
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

const email = z.string().email();
const username = z.string().min(3, 'Username must be at least 3 characters long');
const password = z
  .string()
  .min(4, 'Password must be at least 4 characters long')
  .max(32, 'Password must be less than 32 characters long');

export const RegistrationCredentialsSchema = z.object({
  username,
  email,
  password,
});

export type RegistrationCredentials = z.infer<typeof RegistrationCredentialsSchema>;

export const LoginCredentialsSchema = z.object({
  login: email.or(username),
  password,
});

export type LoginCredentials = z.infer<typeof LoginCredentialsSchema>;
