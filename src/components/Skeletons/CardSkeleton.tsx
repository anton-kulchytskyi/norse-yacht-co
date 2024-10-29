const CardSkeleton = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="relative block w-full h-96 bg-grey-50">
        <div className="h-full w-full bg-grey-50 rounded-lg" />
        <span className="absolute top-6 right-8 bg-grey-20 rounded-[2rem] rounded-tr-sm rounded-bl-sm h-8 w-24" />
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex flex-col">
          <div className="bg-grey-50 h-6 w-48 mb-1 rounded" />
          <div className="bg-grey-50 h-6 w-32 rounded" />
        </div>
        <span className="mx-4 my-4">
          <div className="bg-grey-50 h-8 w-8 rounded-full" />
        </span>
      </div>
      <div className="bg-grey-50h-6 w-32 mb-2 rounded" />
      <p className=" bg-grey-50 h-6 w-64 rounded" />
    </div>
  );
};

export default CardSkeleton;
