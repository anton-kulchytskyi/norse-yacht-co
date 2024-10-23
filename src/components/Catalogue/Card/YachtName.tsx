type YachtNameProps = {
  yachtMake: string;
  yachtModel: string;
};

const YachtName = ({ yachtMake, yachtModel }: YachtNameProps) => (
  <>
    <span>{yachtMake}</span>
    <br />
    <span>{yachtModel}</span>
  </>
);

export default YachtName;
