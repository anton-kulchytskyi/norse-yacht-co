import { ContactSectionContainer } from '@/components/Contact/ContactSectionContainer';


const AddressSection = ({
  address
}: {
  address: string;
}) => {
  return (
    <ContactSectionContainer>
      <h2 className={'text-2xl'}>Address</h2>
      <span className={'break-words whitespace-pre-wrap'}>
        {address}
      </span>
    </ContactSectionContainer>
  );
}

export default AddressSection;
