import { Produto } from "./Produto";



export class Medicamento extends Produto{
    private _generico: string;
    

	constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco)
		this._generico = generico;
	}

    //Método Get
	public get generico(): string {
		return this._generico;
	}

    //Método Set
	public set generico(value: string) {
		this._generico = value;
	}


    //Visualizar Medicamentos
    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de Produto:", this._generico)
    }

}