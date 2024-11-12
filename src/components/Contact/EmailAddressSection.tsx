import ClickableComponent from '../ClickableComponent/ClickableComponent';

const EmailAddressSection = ({ emailAddress }: { emailAddress: string }) => {
  return (
    <div>
      <h2 className="text-2xl">E-mail address</h2>
      <ClickableComponent
        href="mailto:sales@norseyacht.com"
        variant="emailAddress"
      >
        {emailAddress}
      </ClickableComponent>
    </div>
  );
};

export default EmailAddressSection;
