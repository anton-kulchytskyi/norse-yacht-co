import React from 'react';

type Props = {
  color: string;
  footer?: boolean;
};

const Telegram = ({ color, footer }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
  >
    <rect
      width={40}
      height={40}
      fill={`${footer ? '#fff' : `${color}`}`}
      rx={20}
    />
    <path
      fill={`${footer ? `${color}` : '#fff'}`}
      d="m28 12.602-3.005 15.69s-.42 1.088-1.576.566l-6.934-5.505-.033-.017c.937-.87 8.2-7.633 8.518-7.94.491-.475.186-.757-.384-.399l-10.73 7.056-4.138-1.442s-.652-.24-.714-.762c-.064-.523.735-.805.735-.805l16.874-6.855S28 11.558 28 12.602Z"
    />
  </svg>
);

export default Telegram;
