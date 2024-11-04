import CardSkeleton from '@/components/Skeletons/CardSkeleton';

const YACHT_COUNT = 9;

export default function Loading() {
  return (
    <div className="w-full max-w-screen-3xl mx-auto">
      <div className="flex w-full justify-between items-center max-w-screen-3xl px-5 md:px-16 py-4 md:py-6 xl:py-8">
        <div>
          <h4>Catalogue</h4>
        </div>
        <div>Filter & Sorting</div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-5 md:px-16">
        {Array.from({ length: YACHT_COUNT }, (_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
