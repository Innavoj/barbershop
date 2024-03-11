export default interface IResponse {
  status: boolean;
  message: string;
  token?: string | null;
  errors?: {
    email?: string[];
  };
}
