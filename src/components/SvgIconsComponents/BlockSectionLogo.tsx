type BlockSectionLogoProps = {
  order: boolean;
  logoTxt: string;
  logoSubTxt: string;
};
const BlockSectionLogo = ({
  order,
  logoTxt,
  logoSubTxt,
}: BlockSectionLogoProps) => {
  const color = order ? '#31455B' : '#E7801A';
  const multiLineText = logoSubTxt.split(' ');
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={218}
      height={217}
      fill="none"
    >
      <path
        stroke={color}
        strokeWidth={3}
        d="M209.797 2H8.203A6.203 6.203 0 0 0 2 8.203v200.594A6.203 6.203 0 0 0 8.203 215h122.931a6.203 6.203 0 0 0 6.203-6.203v-67.765c0-51.724 27.553-99.532 72.308-125.463l3.262-1.89A6.204 6.204 0 0 0 216 8.313v-.11A6.203 6.203 0 0 0 209.797 2Z"
      />
      <text
        x="8%"
        y="45%"
        textAnchor="start"
        fontSize="48"
        className={`font-baiJ font-semibold ${order ? 'fill-secondary-100' : 'fill-primary'} `}
      >
        {logoTxt}
      </text>
      <text
        x="8%"
        y="65%"
        textAnchor="start"
        fontSize="24"
        className={`font-baiJ ${order ? 'fill-white' : 'fill-primary'} `}
      >
        <tspan
          x="8%"
          dy="0"
        >
          {multiLineText[0]}
        </tspan>
        <tspan
          x="8%"
          dy="30"
        >
          {multiLineText[1]}
        </tspan>
      </text>
      <path
        fill={color}
        d="M147 165.744v-25.313c0-47.133 25.114-90.695 65.902-114.313 1.376-.797 3.098.196 3.098 1.786v136.59a4 4 0 0 1-4 4h-62.25a2.75 2.75 0 0 1-2.75-2.75ZM151.002 177.757l61 .037a4 4 0 0 1 3.998 4v28.277a4 4 0 0 1-4 4h-61a4 4 0 0 1-4-4v-28.314a4 4 0 0 1 4.002-4Z"
      />
    </svg>
  );
};
export default BlockSectionLogo;
