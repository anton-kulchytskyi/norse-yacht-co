export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <h3>Loading yachts from server...</h3>
      <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary" />
    </div>
  );
}
