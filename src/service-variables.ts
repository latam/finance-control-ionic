export class ServiceVariables {
  private static readonly baseUrl: string = 'http://localhost:8081/';
  public static readonly loginUrl: string = ServiceVariables.baseUrl + 'auth/login';
}
