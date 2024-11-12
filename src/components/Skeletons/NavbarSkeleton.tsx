const NavbarSkeleton = () => {
  return (
    <nav className="relative z-20 grid grid-cols-[1fr_auto_1fr] gap-1 items-center pt-4 md:pt-6 xl:pt-8 px-5 md:px-16">
      <div className="animate-pulse">
        <ul className="flex space-x-4">
          <li>
            <div className="h-6 w-20 bg-red-700 rounded"></div>
          </li>
          <li>
            <div className="h-6 w-20 bg-red-700 rounded"></div>
          </li>
        </ul>
        <div className="h-8 w-32 bg-red-700 rounded"></div>
      </div>

      {/* Центральна частина */}
      <div className="flex justify-center animate-pulse">
        <div className="h-8 w-32 bg-red-700 rounded"></div>
      </div>

      {/* Права частина */}
      <div className="animate-pulse">
        <ul className="flex space-x-4">
          <li>
            <div className="h-6 w-20 bg-red-700 rounded"></div>
          </li>
          <li>
            <div className="h-6 w-20 bg-red-700 rounded"></div>
          </li>
          <li>
            <div className="h-6 w-20 bg-red-700 rounded"></div>
          </li>
          <li>
            <div className="h-6 w-20 bg-red-700 rounded"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;
