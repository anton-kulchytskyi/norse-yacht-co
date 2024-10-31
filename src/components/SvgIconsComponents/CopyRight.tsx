const CopyRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={300}
      height={25}
      fill="none"
    >
      <path
        fill="#C6C7CC"
        d="M11 7.864h2a2 2 0 0 1 2 2v1h-2v-1h-2v6h2v-1h2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm1-5a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      />
      <text
        x="10%"
        y="70%"
        textAnchor="start"
        fontSize="16"
        fill="#C6C7CC"
        // className="hidden xl:flex font-medium fill-black hover:fill-secondary-100 hover:underline transition"
      >
        Norse Yachts Co. All rights reserved.
      </text>
    </svg>
  );
};

export default CopyRight;
