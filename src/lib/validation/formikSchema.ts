import { FormikErrors } from 'formik';
import * as Yup from 'yup';

export const formikSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^(?=[A-ZА-ЯІЁĀ-ŽŠĐČĆŽŠŹŃĄĘŚŁŻĆŹÆØÅÜÑ])[a-zA-Zа-яА-ЯіёЁĀ-žŠĐŽČćžšđčŚŹŃĄĘŚŁŻĆŹńąęśłżćźÆØÅÜÑæøåüñ\s]+$/,
      'The name must contain only letters and start with an uppercase letter'
    )
    .min(1, 'The name field is required')
    .max(30, 'The name must not be longer than 30 characters')
    .required('The name field is required'),
  userEmail: Yup.string()
    .email('The email is not valid')
    .required('The email field is required'),
  message: Yup.string()
    .min(1, 'The message field is required')
    .max(5000, 'The message field should not be longer than 5000 characters')
    .required('The message field is required'),
});

export type ExtendedFormikErrors<T> = FormikErrors<T> & {
  serverError?: string; // Додаємо поле serverError
};

export type FormikSchema = Yup.InferType<typeof formikSchema>;

// interface ExtendedFormikError extends FormikErrors<FormikSchema> {
//   serverError?: string; // Додаємо поле для помилки з сервера
// }

// export interface ExtendedFormikHelpers extends FormikHelpers<FormikSchema> {
//   serverError?: string; // Додаємо optional submit property
// }

// export type ExtendedFormikSchema = FormikSchema & {
//   submit?: string; // Додаємо опціональне поле submit
// };
