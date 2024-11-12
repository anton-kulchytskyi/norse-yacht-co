const AddressSection = ({ address }: { address: string }) => {
  return (
    <div>
      <h2 className="text-2xl">Address</h2>
      <span className="break-words whitespace-pre-wrap">{address}</span>
    </div>
  );
};

export default AddressSection;
