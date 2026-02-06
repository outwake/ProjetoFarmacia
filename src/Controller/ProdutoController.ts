import { Produto } from "../model/Produto";
import { colors } from "../util/Colors";
import { Input } from "../util/Input";
import { ProdutoRepository } from "../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository{
    private listarProdutos= new Array<Produto>();
    public numero: number = 0;

    //Método Crud
    procurarPorId(numero: number): void {
       const buscarProduto = this.buscarNoArray(numero)

       if(buscarProduto!== null){
         buscarProduto.visualizar();
       }
       else 
       console.log(colors.fg.red, "\n Produto não encontrado!", colors.reset)
    }


    listarTodas(): void {
         for (let produto of this.listarProdutos) {
            produto.visualizar();
        }
    }


    cadastrar(produto: Produto): void {
       this.listarProdutos.push(produto);
        console.log(`O produto numero ${produto.produtoId} foi cadastrada com sucesso`)
    }


    atualizar(produto: Produto): void {
        const buscarProduto = this.buscarNoArray(produto.produtoId);
        if(buscarProduto!== null){
            
            this.listarProdutos[this.listarProdutos.indexOf(buscarProduto)]=produto;
            console.log(colors.fg.green,`\n O Produto ${produto.produtoId} foi Atualizado com Sucesso`, colors.reset)
        }   
        else {
            console.log(colors.fg.red, "\n Produto não Encontrado!", colors.reset)}
        }

    deletar(numero: number): void {
        const buscarProduto = this.buscarNoArray(numero);
        let op: string;

        if(buscarProduto!== null){
        op= Input.question(`Deseja realmente apagar a conta ${numero}? (S) Sim (N) Não `).toUpperCase();
        
        if(op==="S"){
            this.listarProdutos.splice(this.listarProdutos.indexOf(buscarProduto), 1)
        }   
        
        else if(op==="N"){
            return;
        }

        }
    }


    public gerarId(): number{
        return ++ this.numero;
    }


    
    public buscarNoArray(numero:number): Produto | null{
        for (const produto of this.listarProdutos) {
            if(produto.produtoId === numero){
                return produto;
            }
        }
        return null;
    }

}