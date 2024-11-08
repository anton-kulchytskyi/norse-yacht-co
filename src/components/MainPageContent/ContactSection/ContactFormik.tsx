/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Formik, Form } from 'formik';
import { useRouter, usePathname } from 'next/navigation';
// import { redirect } from 'next/navigation';
import { formikSchema, FormikSchema } from '@/lib/validation/formikSchema';
import InputContainer from '@/components/Shared/InputContainer';
// import { apiClient } from '@/utils/api/apiClient';

type ContactFormikProps = {
  dark?: boolean;
};

const ContactFormik = ({ dark }: ContactFormikProps) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          userEmail: '',
          message: '',
        }}
        validationSchema={formikSchema}
        onSubmit={async (values, { resetForm }) => {
          // same shape as initial values
          // eslint-disable-next-line
          console.log(values, 'values');
          // const data: any = await apiClient.sendMessageFromContactForm(
          //   '/contact',
          //   values
          // );

          // eslint-disable-next-line
          // console.log(data.status, 'data.status');

          // if (data.status === 200) {
          //   redirect('?modal=contact');
          // }
          router.push(`${pathname}?modal=contact`, { scroll: false });
          resetForm();
        }}
      >
        {({ values, errors, touched, isValid, dirty }) => (
          <Form>
            {Object.keys(values).map((inputName) => (
              <InputContainer
                key={inputName}
                inputName={inputName}
                error={errors[inputName as keyof FormikSchema]}
                isTouched={touched[inputName as keyof FormikSchema]}
                dark={dark}
              />
            ))}

            <button
              type="submit"
              className={`${!(isValid && dirty) && 'text-red-700'}`}
              disabled={!(isValid && dirty)}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactFormik;
