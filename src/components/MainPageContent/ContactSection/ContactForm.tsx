'use client';
import { Formik, Form, FormikHelpers } from 'formik';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { formikSchema, FormikSchema } from '@/lib/validation/formikSchema';
import InputContainer from '@/components/Shared/InputContainer';
import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';
import ContactFormModal from '@/components/Modals/ContactFormModal';
import { handleSubmit } from '@/utils/contactForm/handleSubmit';
import { ContactSectionData } from '@/data/mainPage/ContactSection';

type ContactFormikProps = {
  dark?: boolean;
};

const ContactForm = ({ dark }: ContactFormikProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const closeModal = () => {
    router.back();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          userEmail: '',
          message: '',
        }}
        validationSchema={formikSchema}
        onSubmit={async (
          values,
          helpers: FormikHelpers<FormikSchema & { serverError?: string }>
        ) => {
          await handleSubmit(values, helpers, router, pathname);
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

            <ClickableComponent
              type="submit"
              disabled={!(isValid && dirty)}
              variant="secondaryButton"
            >
              {ContactSectionData.button}
            </ClickableComponent>

            {errors.serverError ? (
              <div className="text-error text-sm">{errors.serverError}</div>
            ) : (
              <div className="h-5" />
            )}
          </Form>
        )}
      </Formik>
      {modal === 'contact' && <ContactFormModal onClose={closeModal} />}
    </>
  );
};

export default ContactForm;
