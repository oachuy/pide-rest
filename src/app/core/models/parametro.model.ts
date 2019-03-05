import { Item } from './item.model';

export class Parametro {
    public codlocal: number;
    public estadoresponsable: string;
    public estadocuenta: string;
    public estadogastos: string;
    public estadoficha: string;

    public idcentroeducativo: string;
    
    public tipodoc: string;
    public nrodoc: string;
    public nrocuenta: string;
    public fecnac: string;
    public pais: string;
    public sitrab: string;
    public correo: string;
    public celular: string;
    public observacion: string;

    public nombrecompleto: string;
	public nombre: string;
	public apepat: string;
	public apemat: string;
	public dni: string;
	public contrato: string;

	public rol: string;
	public resultado: number;

	public motivo: string;

	public id: number;

	public tipo: string;

	public password: string;
	public oldpassword: string;

	public items: Item[];

    constructor( object: any){
	    this.codlocal = (object.codlocal) ? object.codlocal : null;
		this.estadoresponsable = (object.estadoresponsable) ? object.estadoresponsable : null;	
		this.estadocuenta = (object.estadocuenta) ? object.estadocuenta : null;	
		this.estadogastos = (object.estadogastos) ? object.estadogastos : null;	    	
		this.estadoficha = (object.estadoficha) ? object.estadoficha : null;

		this.idcentroeducativo = (object.idcentroeducativo) ? object.idcentroeducativo : null;

		this.tipodoc = (object.tipodoc) ? object.tipodoc : null;
		this.nrodoc = (object.nrodoc) ? object.nrodoc : null;
		this.nrocuenta = (object.nrocuenta) ? object.nrocuenta : null;
		this.fecnac = (object.fecnac) ? object.fecnac : null;
		this.pais = (object.pais) ? object.pais : null;
		this.sitrab = (object.sitrab) ? object.sitrab : null;
		this.correo = (object.correo) ? object.correo : null;
		this.celular = (object.celular) ? object.celular : null;
		this.observacion = (object.observacion) ? object.observacion : null;

		this.nombrecompleto = (object.nombrecompleto) ? object.nombrecompleto : null;
		this.nombre = (object.nombre) ? object.nombre : null;
		this.apepat = (object.apepat) ? object.apepat : null;
		this.apemat = (object.apemat) ? object.apemat : null;
		this.dni = (object.dni) ? object.dni : null;
		this.contrato = (object.contrato) ? object.contrato : null;

		this.rol = (object.rol) ? object.rol : null;

		this.motivo = (object.motivo) ? object.motivo : null;

		this.id = (object.id) ? object.id : null;

		this.tipo = (object.tipo) ? object.tipo : null;

		this.password = (object.password) ? object.password : null;
		this.oldpassword = (object.oldpassword) ? object.oldpassword : null;

		this.items = (object.items) ? object.items : null;		
	}

}
