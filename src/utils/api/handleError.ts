export const handleError = (error: Error) => {
  // eslint-disable-next-line
  console.error('Error:', error);
  throw error;
};
