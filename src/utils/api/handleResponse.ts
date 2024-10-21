export const handleResponse = async (response: Response): Promise<void> => {
  const errorMessage = await response.json();
  throw new Error(`Network response was not ok: ${errorMessage.message}`);
};
