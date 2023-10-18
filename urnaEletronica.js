function urnaEletronica() {

    let
        opcao,
        nomeGanhador,
        totalVotosGanhador,
        empate = false,
        encerraVotacao = false,
        contadorTotalDeVotos = 0,
        contadorVotosCandidato1 = 0,
        contadorVotosCandidato2 = 0,
        contadorVotosCandidato3 = 0,
        contadorVotosBrancos = 0,
        contadorVotosNulos = 0;

    console.log('Iniciando o programa');

    const
        nomeCandidato1 = prompt('Digite o nome do candidato 1:'),
        nomeCandidato2 = prompt('Digite o nome do candidato 2:'),
        nomeCandidato3 = prompt('Digite o nome do candidato 3:');

    do {

        opcao = parseInt(prompt(
            ' | 1 | ' + nomeCandidato1 + ' \n' +
            ' | 2 | ' + nomeCandidato2 + ' \n' +
            ' | 3 | ' + nomeCandidato3 + ' \n' +
            ' | 5 | Voto em branco \n' +
            ' | 8 | Voto nulo \n' +
            ' | 0 | Encerrar a votação \n\n' +
            ' Digite sua opção:'
        ));

        contadorTotalDeVotos++;

        switch (opcao) {
            case 1:
                console.log('Voto computado para', nomeCandidato1);
                contadorVotosCandidato1++;
                break;
            case 2:
                console.log('Voto computado para', nomeCandidato2);
                contadorVotosCandidato2++;
                break;
            case 3:
                console.log('Voto computado para', nomeCandidato3);
                contadorVotosCandidato3++;
                break;
            case 5:
                console.log('Voto em branco computado');
                contadorVotosBrancos++;
                break;
            case 8:
                console.log('Voto nulo computado');
                contadorVotosNulos++;
                break;
            case 456789:
                if (confirm('Deseja realmente encerrar a votação?')) {
                    encerraVotacao = true;
                    contadorTotalDeVotos--;
                }
                break;
            default:
                return;
        }

    } while (!encerraVotacao);

    // apresentar estatísticas da votação
    console.clear();
    console.log('**BOLETIM DE URNA**');

    if (contadorTotalDeVotos > 0) {
        console.log('Total de votos:', contadorTotalDeVotos);

        console.log('Total de votos do candidato ' + nomeCandidato1 + ':', contadorVotosCandidato1);
        console.log('Percentual de votos do candidato ' + nomeCandidato1 + ':', (contadorVotosCandidato1 / contadorTotalDeVotos * 100).toFixed(2), '%');

        console.log('Total de votos do candidato ' + nomeCandidato2 + ':', contadorVotosCandidato2);
        console.log('Percentual de votos do candidato ' + nomeCandidato2 + ':', (contadorVotosCandidato2 / contadorTotalDeVotos * 100).toFixed(2), '%');

        console.log('Total de votos do candidato ' + nomeCandidato3 + ':', contadorVotosCandidato3);
        console.log('Percentual de votos do candidato' + nomeCandidato3 + ':', (contadorVotosCandidato3 / contadorTotalDeVotos * 100).toFixed(2), '%');

        console.log('Total de votos em branco:', contadorVotosBrancos);
        console.log('Percentual de votos em branco:', (contadorVotosBrancos / contadorTotalDeVotos * 100).toFixed(2), '%');

        console.log('Total de votos nulos:', contadorVotosNulos);
        console.log('Percentual de votos nulos:', (contadorVotosNulos / contadorTotalDeVotos * 100).toFixed(2), '%');

        // determinar o candidato ganhador
        if (contadorVotosCandidato1 > contadorVotosCandidato2 && contadorVotosCandidato1 > contadorVotosCandidato3) {
            nomeGanhador = nomeCandidato1;
            totalVotosGanhador = contadorVotosCandidato1 + contadorVotosBrancos;
        } else if (contadorVotosCandidato2 > contadorVotosCandidato1 && contadorVotosCandidato2 > contadorVotosCandidato3) {
            nomeGanhador = nomeCandidato2;
            totalVotosGanhador = contadorVotosCandidato2 + contadorVotosBrancos;
        } else if (contadorVotosCandidato3 > contadorVotosCandidato1 && contadorVotosCandidato3 > contadorVotosCandidato2) {
            nomeGanhador = nomeCandidato3;
            totalVotosGanhador = contadorVotosCandidato3 + contadorVotosBrancos;
        } else {
            empate = true;
        }

        if (!empate) {
            console.log('Ganhador nesta urna: ' + nomeGanhador);
            console.log('Total de votos do ganhador:', totalVotosGanhador + contadorVotosBrancos);
            console.log('Percentual de votos do ganhador:', ((totalVotosGanhador + contadorVotosBrancos) / contadorTotalDeVotos * 100).toFixed(2) + '%');
        } else {
            console.log('Não houve ganhador nesta urna');
        }

    } else {
        console.log('Nenhum voto computado nesta urna');
    }

    verificaIntegridadeUrna();

}

function verificaIntegridadeUrna() {

    // Gerar o hash em: https://www.convertstring.com/pt_PT/Hash/SHA256

    fetch('urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(hashCodigoUrna => {

            fetch('urnaEletronica.hash')
                .then(conteudo => conteudo.text())
                .then(conteudo => conteudo.toLowerCase())
                .then(hashEsperado => {
                    
                    if (hashEsperado === hashCodigoUrna) {
                        console.log('** Hash verificado, urna íntegra **');
                    } else {
                        console.log('** INTEGRIDADE DO CÓDIGO COMPROMETIDA — ANULAR URNA **');
                        console.log('Hash esperado: ' + hashEsperado);
                        console.log('Hash da urna: ' + hashCodigoUrna);
                    }
                });

        });


}