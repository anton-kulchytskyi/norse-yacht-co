const PhoneNumberSection = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <div>
      <h2 className="text-2xl">Phone number</h2>
      {phoneNumber}
    </div>
  );
};

export default PhoneNumberSection;
