import { ButtonProps } from '@/lib/interfaces/clickable.interface';

const ButtonComponent = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
