import { commonStyles } from '@/components/Contact/common';
import { AddressSectionProps } from '@/lib/propTypes/ContactPage/AddressSectionProps';

const styles = {
  addressContainer: 'break-words whitespace-pre-wrap'
}

const AddressSection = ({
  address
}: AddressSectionProps) => {
  return (
    <article className={commonStyles.container}>
      <h2 className={commonStyles.subHeader}>Address</h2>
      <span className={styles.addressContainer}>
        {address}
      </span>
    </article>
  );
}

export default AddressSection;
