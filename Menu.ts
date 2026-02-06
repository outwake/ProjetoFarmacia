import { colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";
import { Produto } from "./src/model/Produto";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";
import { ProdutoController } from "./src/Controller/ProdutoController";
import { question, questionInt } from "readline-sync";


//criar objeto global da classe Produto controller
const produtos = new ProdutoController();

//criar Array contendo os tipos de produtos
const tiposProdutos = ['Medicamento', `Cosméticos`]

export function main(){


    while(true){
console.log(colors.bg.black, colors.fg.magenta,
            "\n==================================================");
console.log("||                FARMACIA POPULAR              ||");
console.log("==================================================");
console.log("||         |1| Criar PRODUTO                    ||");
console.log("||         |2| Listar todos os Produtos         ||");
console.log("||         |3| Buscar produto por ID            ||");
console.log("||         |4| Atualizar Produto                ||");
console.log("||         |5| Apagar Produto                   ||");
console.log("||         |0| Sair                             ||");
console.log("==================================================");
console.log("                                                  ",
colors.reset);


    console.log("Digite a opção desejada:")
    let opcao = Input.questionInt("")

    switch(opcao){

        case 1:
            console.clear();
            console.log("=======================================")
            console.log("||          CRIAR PRODUTO            ||")
            console.log("=======================================")
            criarProduto();
            keyPress();
        break;

        case 2:
            console.clear();
            console.log("=======================================")
            console.log("||       LISTAR TODOS PRODUTO        ||")
            console.log("=======================================")
            produtos.listarTodas();
            keyPress();

        break;

        case 3:
            console.clear();
            console.log("=======================================")
            console.log("||           BUSCAR PRODUTO          ||")
            console.log("=======================================")
            buscarProduto();
            keyPress();

        break;
        case 4:
            console.clear();
            console.log("=======================================")
            console.log("||         ATUALIZAR PRODUTO         ||")
            console.log("=======================================")
            atualizarProduto();
         

        break;
        case 5:
            console.clear();
            console.log("=======================================")
            console.log("||          APAGAR PRODUTO           ||")
            console.log("=======================================")
            deletarProduto();


        break;

        case 0:
        sobre();
        process.exit(0);
        break;

        }

    }
  

}


        //Opção 1: Criar um novo produto
        function criarProduto(){
            //Nome PRODUTO
            console.log("Digite o Nome do Produto")
            const nomeProduto = Input.question("")
            
            //Preço do Produto
            console.log("Digite o Preço do Produto")
            const precoProduto = Input.questionFloat("")


            //Definição do tipo de Produto

            console.log("Digite o Tipo de Produto:")
            const tipo = Input.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;

            //Tipo de Produtos

            switch (tipo){

                case 1:  
                    const generico = "Medicamento";
                produtos.cadastrar(new Medicamento(produtos.gerarId(), nomeProduto, tipo, precoProduto, generico ))    
                break;

                case 2:
                    const fragancia = "Fragancia";
                produtos.cadastrar(new Cosmetico(produtos.gerarId(), nomeProduto, tipo, precoProduto, fragancia))
                break;
            }
        }
            //OPÇÃO 2: Buscar Produtos
            function buscarProduto(): void{
            console.log("Digite o Numero do Produto:")
            const numero = Input.questionInt("")
                produtos.procurarPorId(numero);

            }

            //OPÇÃO 4: ATUALIZAR PRODUTO
            function atualizarProduto(): void{

            console.log("Digite o Numero do Produto:")
            const numero= Input.questionInt("");

            const produto = produtos.buscarNoArray(numero);

            if(produto !== null){


            let nomeProduto = produto.nomeProduto;
            let precoProduto = produto.preco;
            const tipo = produto.tipo;
            

            console.log(`Nome do produto atual: ${nomeProduto}`)
            console.log("Digite o novo nome do Produto: \n (Pressione Enter para manter o valor atual");
            let entrada = Input.question("");
            
            nomeProduto=entrada.trim()===""? nomeProduto:entrada;


            console.log(`Preço do produto atual: ${precoProduto}`)
            console.log("Digite o novo preço do Produto: \n (Pressione Enter para manter o valor atual");
            entrada = Input.question("");
            precoProduto = entrada.trim()===""? precoProduto:parseFloat(entrada.replace(",","."))

            
            console.log("Tipo do produto atual:", tipo)
            console.log("Digite o Tipo de Produto:")
            const tipo1 = Input.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;
            switch(tipo1){
                    case 1:  
                    const generico = "Medicamento";
                produtos.atualizar(new Medicamento(numero, nomeProduto, tipo, precoProduto, generico )) 
               
                break;

                case 2:
                    const fragancia = "Fragancia";
                produtos.atualizar(new Cosmetico(numero, nomeProduto, tipo, precoProduto, fragancia))
               
                break;
            }
            }

            }

            
           //OPÇÃO 5: APAGAR PRODUTO

           function deletarProduto():void{
            console.log("Digite o ID do Produto")
            const numero =questionInt("")
            //let op= Input.question(`Deseja realmente apagar a conta ${numero}? (S) Sim (N) Não `).toUpperCase();
        
         //if(op==="S"){
            produtos.deletar(numero);
        //}
       // else if(op ==="N" || op!=="S"){

        return;
        //}
           }

            function sobre(){
        console.log(colors.bg.black, colors.fg.cyanstrong,
                    "***************************************************************");
        console.log("           OBRIGADO POR UTILIZAR A NOSSA FARMÁCIA \n           ");
        console.log("***************************************************************");
        console.log("           PROJETO DESENVOLVIDO POR LARY A PIORAL              ");
        console.log("               Siga-me no GitHub e Linkedin:                   ");
        console.log("                https://github.com/outwake                     ");
        console.log(" https://linkedin.com/in/larissa-ferreira-mendonça-49655a185/  ");
        console.log("***************************************************************",
            colors.reset);
        
    }
  

    /* Função de pausa entre as opções do menu */
    function keyPress(): void {
    console.log(colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

main();