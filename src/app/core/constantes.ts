export class Constantes {
	public static get baseURL(): string {
		return "http://10.40.7.161:8080/restauth/";
    }

    public static getRestItemsUrl(): string {

      return 'http://10.40.7.160:8080/PideRest-1.0/';
      //return "http://localhost:8080/"
    }
    
    public static getIdSistema() : string {
        return '1';
    }

    public static getIdSistemaGesusu() : string {
      return '41';
    }

}
