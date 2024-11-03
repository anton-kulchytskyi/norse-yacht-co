import { ContactSectionContainer } from '@/components/Contact/ContactSectionContainer';


const EmailAddressSection = ({
  emailAddress
}: {
  emailAddress: string;
}) => {
  return (
    <ContactSectionContainer>
      <h2 className='text-2xl'>E-mail address</h2>
      <a href="mailto:sales@norseyacht.com" className={'underline'}>
        {emailAddress}
      </a>
    </ContactSectionContainer>
  );
}

export default EmailAddressSection;
