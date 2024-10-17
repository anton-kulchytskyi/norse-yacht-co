const Heart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className="fill-primary stroke-primary hover:fill-secondary-100 hover:stroke-secondary-100 transition"
    // fill="none"
    // className="transition-all duration-300 ease-in-out hover:fill-secondary-100 hover:stroke-secondary-100"
  >
    <g clipPath="url(#a)">
      <path
        // fill="#4D6575"
        // stroke="#4D6575"
        // className="fill-primary stroke-primary hover:fill-secondary-100 hover:stroke-secondary-100 transition"
        d="m11.563 5.459.437.79.437-.79a5.9 5.9 0 0 1 5.056-3.042 6.3 6.3 0 0 1 6.007 6.53v.02c0 2.108-1.117 4.378-2.793 6.58-1.666 2.188-3.835 4.245-5.828 5.916a4.474 4.474 0 0 1-5.757 0c-1.994-1.671-4.163-3.728-5.83-5.917C1.618 13.345.5 11.076.5 8.966v-.019a6.3 6.3 0 0 1 6.007-6.53 5.9 5.9 0 0 1 5.056 3.042Zm2.674 15.24.178-.15v-.004c2.506-2.12 4.498-4.208 5.876-6.142 1.398-1.962 2.204-3.82 2.209-5.423a5.3 5.3 0 0 0-4.97-5.563l-.03-.001-.03.001a5.3 5.3 0 0 0-4.97 5.56.5.5 0 0 1-1 0 5.3 5.3 0 0 0-4.97-5.56l-.03-.001-.03.001A5.3 5.3 0 0 0 1.5 8.98c.004 1.603.81 3.461 2.208 5.424 1.411 1.98 3.465 4.122 6.055 6.295a3.473 3.473 0 0 0 4.474 0Z"
      />
    </g>
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
export default Heart;
