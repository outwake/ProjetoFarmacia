import { Produto } from "./Produto";


export class Cosmetico extends Produto{

    private _fragancia: string;

	constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco)
		this._fragancia = fragancia;
	}

    //Método GET
	public get fragancia(): string {
		return this._fragancia;
	}

    //Método SET
	public set fragancia(value: string) {
		this._fragancia = value;
	}


    public visualizar(): void { 
        super.visualizar();
        console.log("Tipo de Produto:", this._fragancia)
    }

    
}