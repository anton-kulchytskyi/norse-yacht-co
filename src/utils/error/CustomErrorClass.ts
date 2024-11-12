export class CustomErrorClass extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
  }
}
