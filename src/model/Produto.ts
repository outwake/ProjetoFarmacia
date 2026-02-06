

export class Produto{

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;


	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}


    //Método GET
	public get id(): number {
		return this._id;
	}

   
	public get nome(): string {
		return this._nome;
	}

 
	public get tipo(): number {
		return this._tipo;
	}


	public get preco(): number {
		return this._preco;
	}



    //Método SET
	public set id(value: number) {
		this._id = value;
	}


	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}


	public set preco(value: number) {
		this._preco = value;
	}


    //Método Visualizar

    public visualizar(): void{
        let tipo: string;
        switch(this.tipo){

            case 1:
                tipo = "Medicamento";
                
            break;

            case 2:
                tipo ="Cosmético";
            break;  
            
            default:
            tipo = "Produto Inválido";

        }
        console.log("\n====================================")
        console.log("||          DADOS DA CONTA         ||")
        console.log("====================================")
        console.log(`Numero do Produto: ${this._id}`);
        console.log(`Nome do Produto: ${this._nome}`);
        console.log(`Tipo de Produto: ${tipo}`);
        console.log(`Preço do Produto: R$ ${this._preco}`);

    }

}