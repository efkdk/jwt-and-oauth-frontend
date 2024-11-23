import { z } from 'zod';

export type User = z.infer<typeof UserSchema>;

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  isVerified: z.boolean(),
  username: z.string(),
});
