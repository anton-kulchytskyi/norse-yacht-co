'use client';
import CustomErrorHandler from '@/components/ErrorComponents/CustomErrorHandler';
import { CustomErrorClass } from '@/utils/error/CustomErrorClass';

export default function Error({
  error,
  reset,
}: {
  error: CustomErrorClass;
  reset: () => void;
}) {
  return (
    <CustomErrorHandler
      message={error.message}
      code={error.statusCode || 500}
      onClick={() => reset()}
    />
  );
}
