import { colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";
import { Produto } from "./src/model/Produto";


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

        break;

        case 2:
            console.clear();
            console.log("=======================================")
            console.log("||       LISTAR TODOS PRODUTO        ||")
            console.log("=======================================")

        break;

        case 3:
            console.clear();
            console.log("=======================================")
            console.log("||           BUSCAR PRODUTO          ||")
            console.log("=======================================")

        break;
        case 4:
            console.clear();
            console.log("=======================================")
            console.log("||         ATUALIZAR PRODUTO         ||")
            console.log("=======================================")
         

        break;
        case 5:
            console.clear();
            console.log("=======================================")
            console.log("||          APAGAR PRODUTO           ||")
            console.log("=======================================")


        break;

        case 0:
        sobre();
        process.exit(0);
        break;

        }

    }
  

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