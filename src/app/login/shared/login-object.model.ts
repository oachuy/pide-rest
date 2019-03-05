export class LoginObject {
  public usuario : string;
  public contrasenia : string;
  public idsistema : string;
  
  constructor( object: any){
    this.usuario = (object.usuario) ? object.usuario : null;
    this.contrasenia = (object.contrasenia) ? object.contrasenia : null;
    this.idsistema = (object.idsistema) ? object.idsistema : null;
  }
}