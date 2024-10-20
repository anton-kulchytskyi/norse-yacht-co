const User = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    className="w-6 xl:w-32 fill-primary hover:fill-secondary-100 transition"
  >
    <g clipPath="url(#a)">
      <path d="M12 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6Zm0-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM12 14a9.01 9.01 0 0 0-9 9 1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9Z" />
    </g>
    <text
      x="60%"
      y="85%"
      textAnchor="middle"
      fontSize="18"
      className="hidden xl:flex font-medium fill-black hover:fill-secondary-100 hover:underline transition"
    >
      My account
    </text>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default User;
