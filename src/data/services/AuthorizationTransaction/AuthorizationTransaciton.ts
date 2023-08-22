import axios, { AxiosResponse } from "axios";

interface AuthorizationResponse {
  message: string;
}

export default class AuthorizationTransactionService {
  private readonly url: string;

  constructor() {
    this.url = "https://run.mocky.io/v3/8fafdd68-a090-496f-8c9a-3442cf30dae6";
  }

  async execute(): Promise<AuthorizationResponse> {
    try {
      const response: AxiosResponse = await axios.get(this.url);
      return response.data;
    } catch (error) {
      throw new Error("Unexepected Error");
    }
  }
}
