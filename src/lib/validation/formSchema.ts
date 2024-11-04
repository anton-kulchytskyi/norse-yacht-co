import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'The name field is required' })
    .max(30, { message: 'The name must not be longer than 30 characters' })
    .regex(
      /^(?=[A-ZА-ЯІЁĀ-ŽŠĐČĆŽŠŹŃĄĘŚŁŻĆŹÆØÅÜÑ])[a-zA-Zа-яА-ЯіёЁĀ-žŠĐŽČćžšđčŚŹŃĄĘŚŁŻĆŹńąęśłżćźÆØÅÜÑæøåüñ\s]+$/,
      {
        message:
          'The name must contain only letters and start with an uppercase letter',
      }
    ),
  userEmail: z
    .string()
    .email({ message: 'The email is not valid' })
    .min(1, { message: 'The email field is required' }),
  message: z
    .string()
    .min(1, { message: 'The message field is required' })
    .max(5000, {
      message: 'The message field should not be longer than 5000 characters',
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
