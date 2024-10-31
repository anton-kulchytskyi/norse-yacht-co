import { ButtonProps } from '@/interfaces/clickable.interface';

const ButtonComponent = ({ type, onClick, variant, children }: ButtonProps) => {
  let buttonStyle = '';
  switch (variant) {
    case 'currency':
      buttonStyle = 'flex items-center gap-2 px-4 py-2';
      break;
    case 'secondaryButton':
      buttonStyle =
        'bg-secondary-100 rounded-[56px] py-2.5 px-10 text-lg font-medium hover:bg-secondary-110 active:bg-transparent active:text-secondary-110 active:border-2 active:border-secondary-110 active:border-solid transition';
      break;
    default:
      buttonStyle = '';
  }
  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
