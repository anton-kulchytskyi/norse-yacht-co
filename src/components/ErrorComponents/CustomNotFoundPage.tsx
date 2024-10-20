import ClickableComponent from '../ClickableComponennt/ClickableComponent';

const CustomNotFoundPage = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary mr-3 md:mr-12">
          4
        </span>
        <span className="flex items-center font-bEs text-[400px] sm:text-[700px] md:text-[750px] text-secondary-100 mr-3 md:mr-12 leading-3">
          0
        </span>
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary">
          4
        </span>{' '}
      </div>
      <p className="font-baiJ text-4xl font-medium mb-6">
        Oops, something went wrong...
      </p>
      <ClickableComponent
        text={'Return to the main page'}
        href="/"
        variant="linkButtonSecondary"
      />
    </div>
  );
};

export default CustomNotFoundPage;
