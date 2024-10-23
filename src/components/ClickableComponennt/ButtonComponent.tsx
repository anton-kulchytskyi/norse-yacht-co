import { ButtonProps } from '@/lib/interfaces/clickable.interface';

const ButtonComponent = ({ type, onClick, variant, children }: ButtonProps) => {
  let buttonStyle = '';
  switch (variant) {
    case 'currency':
      buttonStyle =
        'flex items-center gap-2 px-4 py-2 border-b border-transparent hover:border-b hover:border-b-secondary-100';
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
