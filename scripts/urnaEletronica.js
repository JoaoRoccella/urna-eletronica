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
        percentualGanhador = 0.0,

        nomeCandidato1,
        nomeCandidato2,
        nomeCandidato3,
        nomeGanhador = "",

        senhaMesario = 789456,
        opcaoInvalida = false,
        iniciaVotacao = false,
        situacaoEmpate = false,
        opcaoFim = "N",

        dataHoraInicio,
        dataHoraFim;

    do {

        if (opcaoInvalida) {
            console.log("Opção inválida!");
        }

        nomeCandidato1 = prompt(
            "** Configuração da urna\n\n" +
            "Digite o nome do(a) 1º candidato(a):");
        if (usuarioCancelou(nomeCandidato1)) {
            break;
        }

        nomeCandidato2 = prompt(
            "** Configuração da urna\n\n" +
            "Digite o nome do(a) 2º candidato(a):");
        if (usuarioCancelou(nomeCandidato2)) {
            break;
        }

        nomeCandidato3 = prompt(
            "** Configuração da urna\n\n" +
            "Digite o nome do(a) 3º candidato(a):");
        if (usuarioCancelou(nomeCandidato3)) {
            break;
        }

        opcaoInicio = prompt(
            "** Candidatos configurados:\n\n" +
            "| 1 | " + nomeCandidato1 + "\n" +
            "| 2 | " + nomeCandidato2 + "\n" +
            "| 3 | " + nomeCandidato3 + "\n \n" +

            "** Liberação da urna: \n\n" +
            "| L | Liberar urna para votação\n" +
            "| C | Configurar urna novamente \n\n" +
            "Opção de liberação da urna:"
        );

        if (opcaoInicio == "L" || opcaoInicio == "l") {
            iniciaVotacao = true;
        } else if (opcaoInicio != "C" && opcaoInicio != "c") {
            opcaoInvalida = true;
        }

    } while (!iniciaVotacao);

    dataHoraInicio = dataHoraAtual();

    do {

        if (opcaoInvalida) {
            window.alert("** Opção inválida!");
            opcaoInvalida = false;
        }

        codigoVoto = prompt(
            "** Opções de voto: \n\n" +
            "| 1 | " + nomeCandidato1 + "\n" +
            "| 2 | " + nomeCandidato2 + "\n" +
            "| 3 | " + nomeCandidato3 + "\n" +
            "| 5 | Voto em branco \n" +
            "| 8 | Voto nulo \n\n" +
            "Digite agora o código do seu voto:");

        if (!usuarioCancelou(codigoVoto)) {
            codigoVoto = parseInt(codigoVoto);
        } else {
            console.log("Programa finalizado pelo usuário");
            break;
        }

        switch (codigoVoto) {
            case senhaMesario:

                opcaoFim = prompt("Deseja realmente encerrar a votação? Digite \"S\" para confirmar:")

                if (opcaoFim === "n" || opcaoFim === "N") {
                    codigoVoto = -1;
                }

                break;
            case 1:
                votosCandidato1++;
                votosTotais++;
                opcaoInvalida = false;
                audioConfirmacao();
                break;
            case 2:
                votosCandidato2++;
                votosTotais++;
                opcaoInvalida = false;
                audioConfirmacao();
                break;
            case 3:
                votosCandidato3++;
                votosTotais++;
                opcaoInvalida = false;
                audioConfirmacao();
                break;
            case 5:
                votosBranco++;
                votosTotais++;
                opcaoInvalida = false;
                audioConfirmacao();
                break;
            case 8:
                votosNulo++;
                votosTotais++;
                opcaoInvalida = false;
                audioConfirmacao();
                break;
            default:
                opcaoInvalida = true;
                break;
        }
    } while (codigoVoto !== senhaMesario);

    dataHoraFim = dataHoraAtual();

    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosTotaisGanhador = votosCandidato1 + votosBranco;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosTotaisGanhador = votosCandidato2 + votosBranco;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosTotaisGanhador = votosCandidato3 + votosBranco;
    } else {
        situacaoEmpate = true;
    }

    if (votosTotais !== 0) {
        percentualGanhador = (votosTotaisGanhador / votosTotais) * 100.0;

        window.alert(
            "** Boletim de urna\n\n" +
            "Votos totais: " + votosTotais + "\n" +

            "Votos no candidato " + nomeCandidato1 + ": " + votosCandidato1 +
            " (" + (votosCandidato1 / votosTotais * 100.0).toFixed(2) + "%)\n" +

            "Votos no candidato " + nomeCandidato2 + ": " + votosCandidato2 +
            " (" + (votosCandidato2 / votosTotais * 100.0).toFixed(2) + "%)\n" +

            "Votos no candidato " + nomeCandidato3 + ": " + votosCandidato3 +
            " (" + (votosCandidato3 / votosTotais * 100.0).toFixed(2) + "%)\n" +

            "Votos em branco: " + votosBranco + " (" +
            (votosBranco / votosTotais * 100.0).toFixed(2) + "%)\n" +

            "Votos nulos: " + votosNulo + " (" +
            (votosNulo / votosTotais * 100.0).toFixed(2) + "%)"
        );

    } else {
        window.alert("** Boletim de urna\n\n** Nenhum voto registrado");
    }

    if (!situacaoEmpate) {
        window.alert(
            "** Boletim de urna\n\n" +
            "** Ganhador nesta urna: \n\n" +
            nomeGanhador.toUpperCase() + ", com " + votosTotaisGanhador + " votos (" +
            percentualGanhador.toFixed(2) + "%) somados os votos em branco.\n\n" +
            "Início da votação: " + dataHoraInicio + "\n" +
            "Final da votação: " + dataHoraFim
        );

    } else if (votosTotais !== 0) {
        window.alert(
            "** Boletim de urna\n\n" +
            "** Não foi possível determinar um ganhador nesta\nurna (houve empate entre os candidatos mais votados).\n\n" +
            "Início da votação: " + dataHoraInicio + "\n" +
            "Final da votação: " + dataHoraFim
        );
    }

}

function audioConfirmacao() {
    const audio = new Audio("./assets/audio/confirmacao.mp3");
    audio.play();

    setTimeout(() => {
        audio.pause();
    }, 500);
}

function usuarioCancelou(leituraPrompt) {
    return leituraPrompt === null;
}

function dataHoraAtual() {
    const dataAtual = new Date().toLocaleDateString();
    const horaAtual = new Date().toLocaleTimeString();
    return dataAtual + " " + horaAtual;
}
