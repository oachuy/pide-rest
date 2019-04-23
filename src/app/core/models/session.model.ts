import { User } from "../models/user.model";


export class Session {
    public apellidoMaterno : string;
    public apellidoPaterno : string;
    public estado :string;
    public idperfil : string ;
    public idpersonal : string;
    public idusuario : string; 
    public nombre : string;
    public nombreCompleto : string;
    public opciones : any[];
    public perDocumento : string;
    public perFecNacimiento : string;
    public perNroDocumento : string;
    public prhunidadorganica : string;
    public sexo :string;
    public token : string;
    public user : string;
    public usuldap :string;
    public usupersona : string;

  constructor( object: any){

   this.apellidoMaterno = (object.apellidoMaterno) ? object.apellidoMaterno: null;
   this.apellidoPaterno = (object.apellidoPaterno) ? object.apellidoPaterno : null;
   this.estado = (object.estado) ? object.estado : null;
   this.idperfil = (object.idperfil) ? object.idperfil : null;
   this.idpersonal = (object.idpersonal) ? object.idpersonal : null;
   this.idusuario = (object.idusuario) ? object.idusuario : null;
   this.nombre = (object.nombre) ? object.nombre : null;
   this.nombreCompleto = (object.nombreCompleto) ? object.nombreCompleto : null;
   this.opciones = (object.opciones) ? object.opciones : [];
   this.perDocumento= (object.perDocumento) ? object.perDocumento : null;
   this.perFecNacimiento = (object.perFecNacimiento) ? object.perFecNacimiento : null;
   this.perNroDocumento = (object.perNroDocumento) ? object.perNroDocumento : null;
   this.prhunidadorganica = (object.prhunidadorganica) ? object.prhunidadorganica : null;
   this.sexo = (object.sexo) ? object.sexo : null;
   this.token= (object.token) ? object.token : null;
   this.user = (object.user) ? object.user : null;

   this.usuldap= (object.usuldap) ? object.usuldap : null;
   this.usupersona = (object.usupersona) ? object.usupersona : null;
  }
}