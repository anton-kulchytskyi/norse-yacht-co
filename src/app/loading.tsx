export default function Loading() {
  return (
    <div className="flex flex-col items-center mt-32">
      <h3>Loading data from main page ...</h3>
      <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary" />
    </div>
  );
}
