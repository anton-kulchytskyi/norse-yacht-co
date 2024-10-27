import { commonStyles } from '@/components/Contact/common';
import { PhoneSectionProps } from '@/lib/propTypes/ContactPage/PhoneSectionProps';

const PhoneNumberSection = ({
  phoneNumber
}: PhoneSectionProps) => {
  return (
    <article className={commonStyles.container}>
      <h2 className={commonStyles.subHeader}>Phone number</h2>
      {phoneNumber}
    </article>
  );
}

export default PhoneNumberSection;
