import { commonStyles } from '@/components/Contact/common';
import { EmailSectionProps } from '@/lib/propTypes/ContactPage/EmailSectionProps';

const styles = {
  emailLink: 'underline',
};

const EmailAddressSection = ({
  emailAddress
}: EmailSectionProps) => {
  return (
    <article className={commonStyles.container}>
      <h2 className={commonStyles.subHeader}>E-mail address</h2>
      <a href="mailto:sales@norseyacht.com" className={styles.emailLink}>
        {emailAddress}
      </a>
    </article>
  );
}

export default EmailAddressSection;
