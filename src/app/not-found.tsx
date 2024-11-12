import CustomErrorHandler from '@/components/ErrorComponents/CustomErrorHandler';

export default function NotFound() {
  return (
    <CustomErrorHandler
      message="Oops, something went wrong..."
      code={404}
    />
  );
}
