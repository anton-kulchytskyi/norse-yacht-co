'use client';
import CustomErrorPage from '@/components/ErrorComponents/CustomErrorPage';
import { CustomError } from '@/utils/error/CustomError';

export default function Error({
  error,
  reset,
}: {
  error: CustomError;
  reset: () => void;
}) {
  return (
    <div className="text-center">
      <CustomErrorPage
        message={error.message}
        onClick={() => reset()}
      />
    </div>
  );
}
