import ClickableComponent from '../ClickableComponent/ClickableComponent';
import NumberDisplay from './NumberDisplay';

type CustomErrorHandlerProps = {
  message: string;
  code: number;
  onClick?: () => void;
};

const CustomErrorHandler = ({
  message,
  code,
  onClick,
}: CustomErrorHandlerProps) => {
  const numsArray = String(code).split('');
  return (
    <div className="text-center pb-4">
      <div className="flex justify-center items-baseline space-x-3 md:space-x-12">
        {numsArray.map((num, idx) => (
          <NumberDisplay
            key={idx}
            size={
              idx % 2
                ? 'text-[400px] sm:text-[700px] md:text-[750px]'
                : 'text-[150px] sm:text-[260px] md:text-[288px]'
            }
            font={idx % 2 ? 'font-bEs' : 'font-baiJ font-bold'}
            color={idx % 2 ? 'text-secondary-100' : 'text-primary'}
            additionalClasses={idx % 2 ? 'leading-[0]' : ''}
          >
            {num}
          </NumberDisplay>
        ))}
      </div>
      <p className="font-baiJ text-3xl md:text-4xl font-medium mb-6">
        {message}
      </p>
      <div className="space-x-4">
        {onClick && (
          <ClickableComponent
            type="button"
            onClick={onClick}
            variant="secondaryButton"
          >
            Try again
          </ClickableComponent>
        )}
        <ClickableComponent
          href="/"
          variant="linkButtonSecondary"
        >
          Return to the main page
        </ClickableComponent>
      </div>
    </div>
  );
};

export default CustomErrorHandler;
