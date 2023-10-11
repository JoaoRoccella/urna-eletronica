function urnaEletronica() {

    let
        opcao,
        contadorTotalDeVotos = 0,
        contadorVotosCandidato1 = 0,
        contadorVotosCandidato2 = 0,
        contadorVotosCandidato3 = 0,
        contadorVotosBrancos = 0,
        contadorVotosNulos = 0

    console.log('Iniciando o programa');

    do {

        opcao = parseInt(prompt(
            ' | 1 | Candidato 1 \n' +
            ' | 2 | Candidato 2 \n' +
            ' | 3 | Candidato 3 \n' +
            ' | 5 | Voto em branco \n' +
            ' | 8 | Voto nulo \n' +
            ' | 0 | Encerrar a votação \n\n' +
            ' Digite sua opção:'
        ));

        contadorTotalDeVotos++;

        switch (opcao) {
            case 1:
                console.log('Voto computado para o candidato 1');
                contadorVotosCandidato1++;
                break;
            case 2:
                console.log('Voto computado para o candidato 2');
                contadorVotosCandidato2++;
                break;
            case 3:
                console.log('Voto computado para o candidato 3');
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
            case 0:
                console.log('0 pressionado, encerrando a votação...');
                contadorTotalDeVotos--;
                break;
            default:
                return;
        }

    } while (opcao !== 0);

    console.log('Boletim de Urna');
    console.log('Total de votos:', contadorTotalDeVotos);

    // apresentar estatísticas da votação

    console.log('Percentual de votos do candidato 1:', contadorVotosCandidato1 / contadorTotalDeVotos * 100, '%')
    // determinar o candidato ganhador


}