export class Constantes {
	public static get baseURL(): string {
		return "http://10.40.7.161:8080/restauth/";
    }

    public static getRestItemsUrl(): string {
		  //return "http://10.40.1.225:8080/ProniedPIDE-0.0.1-SNAPSHOT/sunedu";
          return 'http://10.40.7.161:8080/ProniedPIDE-0.0.1-SNAPSHOT/';
          //return "http://10.40.7.137:8080/ProniedPIDE-0.0.1-SNAPSHOT/sunedu";
    }
    
    public static getIdSistema() : string {
        return '1';
    }

}
