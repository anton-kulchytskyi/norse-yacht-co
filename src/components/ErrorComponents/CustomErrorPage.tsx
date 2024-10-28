import ClickableComponent from '../ClickableComponennt/ClickableComponent';

type CustomErrorPageProps = {
  message: string;
  onClick: () => void;
};

const CustomErrorPage = ({ message, onClick }: CustomErrorPageProps) => {
  return (
    <div className="text-center pb-4">
      <div className="flex justify-center items-baseline">
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary mr-3 md:mr-12">
          5
        </span>
        <span className="flex items-center font-bEs text-[400px] sm:text-[700px] md:text-[750px] text-secondary-100 mr-3 md:mr-12 -mb-4 leading-none">
          0
        </span>
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary">
          3
        </span>{' '}
      </div>
      <p className="font-baiJ text-3xl md:text-4xl font-medium mb-6">
        {message}
      </p>
      <div className="space-x-4">
        <ClickableComponent
          type="button"
          onClick={onClick}
          variant="secondaryButton"
        >
          Try again
        </ClickableComponent>
        <ClickableComponent
          href="/"
          variant="linkButtonPrimary"
        >
          Return to the main page
        </ClickableComponent>
      </div>
    </div>
  );
};

export default CustomErrorPage;
