import { ContactSectionContainer } from '@/components/Contact/ContactSectionContainer';

const PhoneNumberSection = ({
  phoneNumber
}: {
  phoneNumber: string;
}) => {
  return (
    <ContactSectionContainer>
      <h2 className={'text-2xl'}>Phone number</h2>
      {phoneNumber}
    </ContactSectionContainer>
  );
}

export default PhoneNumberSection;
