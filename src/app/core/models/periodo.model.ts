export class Periodo {
	public idperiodo: string;
	public descripcion: string;

	constructor( object: any){
	    this.idperiodo = (object.idperiodo) ? object.idperiodo : null;
	    this.descripcion = (object.descripcion) ? object.descripcion : null;
	}
}
