type NumberDisplayProps = {
  size: string;
  font: string;
  color: string;
  additionalClasses?: string;
  children: React.ReactNode;
};

const NumberDisplay = ({
  size,
  font,
  color,
  children,
  additionalClasses = '',
}: NumberDisplayProps) => {
  return (
    <span
      className={`flex items-center ${font} ${size} ${color} ${additionalClasses}`}
    >
      {children}
    </span>
  );
};

export default NumberDisplay;
