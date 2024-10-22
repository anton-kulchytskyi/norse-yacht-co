export class FetchImgUrlError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
  }
}
