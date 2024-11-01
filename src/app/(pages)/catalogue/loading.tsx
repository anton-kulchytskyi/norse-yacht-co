import CardSkeleton from '@/components/Skeletons/CardSkeleton';

const YACHT_COUNT = 9;

export default function Loading() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-5 md:px-16">
      {Array.from({ length: YACHT_COUNT }, (_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
