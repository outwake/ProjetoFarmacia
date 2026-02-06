

export abstract class Produto{

    private _produtoId: number;
    private _nomeProduto: string;
    private _tipo: number;
    private _preco: number;


	constructor(produtoId: number, nomeProduto: string, tipo: number, preco: number) {
		this._produtoId = produtoId;
		this._nomeProduto = nomeProduto;
		this._tipo = tipo;
		this._preco = preco;
	}


    //Método GET
	public get produtoId(): number {
		return this._produtoId;
	}

   
	public get nomeProduto(): string {
		return this._nomeProduto;
	}

 
	public get tipo(): number {
		return this._tipo;
	}


	public get preco(): number {
		return this._preco;
	}



    //Método SET
	public set produtoId(value: number) {
		this._produtoId = value;
	}


	public set nomeProduto(value: string) {
		this._nomeProduto = value;
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
        console.log(`Numero do Produto: ${this._produtoId}`);
        console.log(`Nome do Produto: ${this._nomeProduto}`);
        console.log(`Preço do Produto: R$ ${this._preco}`);

    }

}