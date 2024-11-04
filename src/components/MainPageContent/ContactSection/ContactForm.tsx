// components/ContactForm.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from '@/lib/validation/formSchema';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    // Виклик серверної дії для обробки даних
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Обробка успішної відповіді
      alert('Повідомлення надіслано!');
    } else {
      // Обробка помилки
      alert('Сталася помилка при надсиланні повідомлення.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div className="relative">
        <label
          htmlFor="name"
          className="absolute text-sm font-medium text-white"
        >
          Your name
        </label>
        <input
          {...register('name')}
          type="text"
          className={`mt-1 block w-full bg-transparent border ${errors.name ? 'border-error' : 'border-white'} rounded-md focus:outline-none focus:border-secondary-100`}
        />
        {errors.name && (
          <p className="text-error text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail
        </label>
        <input
          {...register('userEmail')}
          type="email"
          className={`mt-1 block w-full border ${errors.userEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-indigo-500`}
        />
        {errors.userEmail && (
          <p className="text-red-500 text-sm">{errors.userEmail.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          {...register('message')}
          className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-indigo-500`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        {isSubmitting ? 'Надсилання...' : 'Надіслати'}
      </button>
    </form>
  );
};

export default ContactForm;
