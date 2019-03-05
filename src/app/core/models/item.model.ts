export class Item {
	public concepto: number;
	public accion: number;
	public espacio: number;
	public medida: number;
	public unitario: number;
	public cantidad: number;
	public total: number;

	constructor( object: any){
		this.concepto = (object.concepto) ? object.concepto : null;
		this.accion = (object.accion) ? object.accion : null;
		this.espacio = (object.espacio) ? object.espacio : null;
		this.medida = (object.medida) ? object.medida : null;
		this.unitario = (object.unitario) ? object.unitario : null;
		this.cantidad = (object.cantidad) ? object.cantidad : null;
		this.total = (object.total) ? object.total : null;		
	}
}
