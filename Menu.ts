import { colors } from './src/util/Color';
import readlineSync from 'readline-sync';
import { Livro } from './src/model/Livro';

let opcao: number;
const livros: Livro[] = [];

export function main() {
    while (true) {
        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("               Share Book - Seu Livro Digital!       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Livros                     ");
        console.log("            2 - Listar Livros                        ");
        console.log("            3 - Cadastrar Clientes                   ");
        console.log("            4 - Registrar Venda de Livros            ");
        console.log("            5 - Listar Vendas                        ");
        console.log("            6 - Consultar Livro por Título           ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        switch (opcao) {
            case 1: // Cadastrar Livros
                console.log("\n=== CADASTRAR LIVRO ===");
                const titulo = readlineSync.question("Título: ");
                const autor = readlineSync.question("Autor: ");
                const preco = readlineSync.questionFloat("Preço: ");
                const estoque = readlineSync.questionInt("Estoque: ");
                
                const livro = new Livro(titulo, autor, preco, estoque);
                livros.push(livro);
                console.log("Livro cadastrado com sucesso!");
                break;

            case 2: // Listar Livros
                console.log("\n=== LISTA DE LIVROS ===");
                if (livros.length === 0) {
                    console.log("Nenhum livro cadastrado.");
                } else {
                    livros.forEach((livro, index) => {
                        console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
                    });
                }
                break;

            case 3: // Cadastrar Clientes
                console.log("\n=== CADASTRAR CLIENTE ===");
                console.log("Funcionalidade em desenvolvimento...");
                break;

            case 4: // Registrar Venda
                console.log("\n=== REGISTRAR VENDA ===");
                console.log("Funcionalidade em desenvolvimento...");
                break;

            case 5: // Listar Vendas
                console.log("\n=== LISTAR VENDAS ===");
                console.log("Funcionalidade em desenvolvimento...");
                break;

            case 6: // Consultar Livro por Título
                console.log("\n=== CONSULTAR LIVRO ===");
                const tituloBusca = readlineSync.question("Digite o título para buscar: ");
                const livroEncontrado = livros.find(livro => 
                    livro.titulo.toLowerCase().includes(tituloBusca.toLowerCase())
                );
                
                if (livroEncontrado) {
                    console.log("Livro encontrado:");
                    console.log(`Título: ${livroEncontrado.titulo}`);
                    console.log(`Autor: ${livroEncontrado.autor}`);
                    console.log(`Preço: R$ ${livroEncontrado.preco}`);
                    console.log(`Estoque: ${livroEncontrado.estoque}`);
                } else {
                    console.log("Livro não encontrado.");
                }
                break;

            case 7: // Sair
                console.log("\n=== SAIR ===");
                console.log("Obrigado por usar o Share Book!");
                sobre();
                process.exit(0);

            default:
                console.log("Opção inválida! Tente novamente.");
        }
        
        keyPress();
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Paulo Henrique Belarmino Santos");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/Phcode007/Share_book");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

main();