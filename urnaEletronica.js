/* Simulação de uma urna eletrônica
 * Autor: João Roccella
 * Conceitos: fluxograma, variáveis, leia, escreva, limpa, escolha-caso,
 * faca-enquanto, se, inicialização, operadores lógicos, precedência
 * 
 * Crie um programa que simule o funcionamento de uma urna eletrônica 
 * (utilizando uma estrutura de repetição para permitir múltiplas votações). 
 * 
 * O programa deve apresentar as seguintes opções de voto (utilizando a 
 * estrutura escolha-caso):
 *   
 * 1 -> Candidato 1
 * 2 -> Candidato 2
 * 3 -> Candidato 3
 * 5 -> Voto em branco
 * 8 -> Voto nulo
 * 0 -> Encerrar a votação
 *   
 * O programa deve solicitar ao usuário que digite o número do seu voto e 
 * armazenar a opção de voto em uma variável. 
 * 
 * Se o usuário escolher uma das opções de candidato, o programa deve 
 * incrementar o contador de votos do respectivo candidato. 
 * 
 * Se o usuário escolher a opção voto em branco, o programa deve incrementar 
 * o contador de votos em branco. 
 * 
 * Se o usuário escolher a opção voto nulo, o programa deve incrementar o 
 * contador de votos nulos. 
 * 
 * Se o usuário escolher a opção encerrar a votação, o programa deve sair 
 * do loop e exibir o resultado final da votação (quantidade e percentual de
 * votos de cada candidato, votos em branco, votos nulos e candidato ganhador,
 * com o seu total de votos e percentual acrescidos os votos em branco).
 *   
 * O programa deve continuar a permitir a votação até que o usuário escolha 
 * a opção para encerrar a votação.
 */

function urnaEletronica() {

    let
        codigoVoto,
        votosTotais = 0,
        votosCandidato1 = 0,
        votosCandidato2 = 0,
        votosCandidato3 = 0,
        votosBranco = 0,
        votosNulo = 0,
        votosTotaisGanhador = 0,
        percentualGanhador = 0.0;

    const
        nomeCandidato1 = prompt("Digite o nome do 1º candidato(a):"),
        nomeCandidato2 = prompt("Digite o nome do 2º candidato(a):"),
        nomeCandidato3 = prompt("Digite o nome do 3º candidato(a):"),

        senhaMesario = 789456;

    let
        nomeGanhador = "";

    let
        opcaoInvalida = false,
        opcaoFim = 

    do {
        console.clear();

        if (opcaoInvalida) {
            console.log("** Opção inválida! \n\n");
            opcaoInvalida = false;
        }

        console.log("** Opções de voto: \n\n");
        console.log("1 | ", nomeCandidato1, "\n");
        console.log("2 | ", nomeCandidato2, "\n");
        console.log("3 | ", nomeCandidato3, "\n");
        console.log("5 | Voto em branco \n");
        console.log("8 | Voto nulo \n");
        console.log("0 | Encerrar a votação \n\n");

        codigoVoto = prompt("Digite agora o código do seu voto: ");

        if (codigoVoto !== null) {
            codigoVoto = parseInt(codigoVoto);
        } else {
            break;
        }

        switch (codigoVoto) {
            case 0:
                break;
            case 1:
                votosCandidato1++;
                votosTotais++;
                break;
            case 2:
                votosCandidato2++;
                votosTotais++;
                break;
            case 3:
                votosCandidato3++;
                votosTotais++;
                break;
            case 5:
                votosBranco++;
                votosTotais++;
                break;
            case 8:
                votosNulo++;
                votosTotais++;
                break;
            default:
                opcaoInvalida = true;
                break;
        }
    } while (codigoVoto !== 0);

    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosTotaisGanhador = votosCandidato1 + votosBranco;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosTotaisGanhador = votosCandidato2 + votosBranco;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosTotaisGanhador = votosCandidato3 + votosBranco;
    }

    console.clear();

    console.log("** Resultado da apuração desta urna\n\n");

    if (votosTotais !== 0) {
        percentualGanhador = (votosTotaisGanhador / votosTotais) * 100.0;

        console.log("Votos totais: ", votosTotais, "\n");

        console.log("Votos no candidato ",
            nomeCandidato1,
            ": ",
            votosCandidato1,
            " (",
            (votosCandidato1 / votosTotais * 100.0).toFixed(2),
            "%)\n"
        );
        console.log(
            "Votos no candidato ",
            nomeCandidato2,
            ": ",
            votosCandidato2,
            " (",
            (votosCandidato2 / votosTotais * 100.0).toFixed(2),
            "%)\n"
        );
        console.log(
            "Votos no candidato ",
            nomeCandidato3,
            ": ",
            votosCandidato3,
            " (",
            (votosCandidato3 / votosTotais * 100.0).toFixed(2),
            "%)\n"
        );
        console.log(
            "Votos em branco: ",
            votosBranco,
            " (",
            (votosBranco / votosTotais * 100.0).toFixed(2),
            "%)\n"
        );
        console.log(
            "Votos nulos: ",
            votosNulo,
            " (",
            (votosNulo / votosTotais * 100.0).toFixed(2),
            "%)\n\n"
        );

        console.log("** Ganhador nesta urna\n\n");
        console.log(
            nomeGanhador,
            " com ",
            votosTotaisGanhador,
            " votos (",
            percentualGanhador.toFixed(2),
            "%) somados os votos em branco\n"
        );

    } else {
        console.log("** Nenhum voto registrado\n");
    }
}

