import ClickableComponent from '../ClickableComponennt/ClickableComponent';

const CustomNotFoundPage = () => {
  return (
    <div className="text-center pb-4">
      <div className="flex justify-center items-baseline">
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary mr-3 md:mr-12">
          4
        </span>
        <span className="flex items-center font-bEs text-[400px] sm:text-[700px] md:text-[750px] text-secondary-100 mr-3 md:mr-12 -mb-4 leading-[0]">
          0
        </span>
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary">
          4
        </span>{' '}
      </div>
      <p className="font-baiJ text-3xl md:text-4xl font-medium mb-6">
        Oops, something went wrong...
      </p>
      <ClickableComponent
        href="/"
        variant="linkButtonSecondary"
      >
        Return to the main page
      </ClickableComponent>
    </div>
  );
};

export default CustomNotFoundPage;
