'use client'; // Error components must be Client Components

import { useState, useEffect } from 'react';
import CustomErrorPage from '@/components/ErrorComponents/CustomErrorPage';
import { CustomError } from '@/utils/error/CustomError';

export default function Error({
  error,
  reset,
}: {
  // error: Error & { digest?: string };
  error: CustomError;
  reset: () => void;
}) {
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line
    console.error(error.message, 'error');
    setErrorMessage(error.message);
  }, [error]);

  return (
    <div className="text-center">
      {/* <h2>Something went wrong!</h2> */}
      <CustomErrorPage message={errorMessage} />

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
