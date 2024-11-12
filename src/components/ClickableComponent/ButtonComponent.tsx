import { ButtonProps } from '@/interfaces/clickable.interface';

const ButtonComponent = ({
  type,
  disabled,
  onClick,
  variant,
  children,
}: ButtonProps) => {
  let buttonStyle = '';
  switch (variant) {
    case 'currency':
      buttonStyle = 'flex items-center gap-2 px-4 py-2';
      break;
    case 'secondaryButton':
      buttonStyle = `rounded-[56px] py-2.5 px-10 text-lg font-medium ${
        disabled
          ? 'bg-transparent border border-grey-100 text-grey-80'
          : 'bg-secondary-100 border border-secondary-100 text-white hover:border-secondary-110 hover:bg-secondary-110 active:bg-transparent active:text-secondary-110 active:border-secondary-110 transition'
      }`;
      break;
    default:
      buttonStyle = '';
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
