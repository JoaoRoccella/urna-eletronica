function urnaEletronica() {

    // Aqui vai todo o código do programa....

    console.log('Iniciando o programa');

    let
        totalVotosCandidato1 = 0,
        totalVotosCandidato2 = 0,
        totalVotosCandidato3 = 0,
        totalVotosBrancos = 0,
        totalVotosNulos = 0,
        totalVotos = 0;

    // equivalente a:

    // let totalVotosCandidato1 = 0;
    // let totalVotosCandidato2 = 0;
    // let totalVotosCandidato3 = 0;
    // let totalVotosBranco = 0;
    // let totalVotosNulo = 0;

    let voto;

    do {

        // instruções repetidas no loop

        console.log('\n\n Opções de votação:');
        console.log('| 1 | Candidato 1');
        console.log('| 2 | Candidato 2');
        console.log('| 3 | Candidato 3');
        console.log('| 5 | Branco');
        console.log('| 8 | Nulo');
        console.log('| 0 | Encerrar a votação');

        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++; // o total de votos é incrementado

        console.clear(); // limpa o console

        switch (voto) {
            case 1:
                totalVotosCandidato1++; // eq. tototalVotosCandidato1 += 1
                console.log('O candidato 1 recebeu um voto');
                break;
            case 2:
                totalVotosCandidato2++;
                console.log('O candidato 2 recebeu um voto');
                break;
            case 3:
                totalVotosCandidato3++;
                console.log('O candidato 3 recebeu um voto');
                break;
            case 5:
                totalVotosBrancos++;
                console.log('O voto foi em branco');
                break;
            case 8:
                totalVotosNulos++;
                console.log('O voto foi anulado');
                break;
            case 0:
                totalVotos--; // o contador é subtraído 1 unidade, porque "0" não conta como votação
                console.log('A votação foi encerrada pelo usuário');
                break;
            default:
                return;
        }

        // A estrutura switch-case acima é equivalente a:
        if (voto === 1) {
            totalVotosCandidato1++;
            console.log('O candidato 1 recebeu um voto');
        } else if (voto === 2) {
            totalVotosCandidato2++;
            console.log('O candidato 2 recebeu um voto');
        } else if (voto === 3) {
            totalVotosCandidato3++;
            console.log('O candidato 3 recebeu um voto');
        } else if (voto === 5) {
            totalVotosBrancos++;
            console.log('O voto foi em branco');
        } else if (voto === 8) {
            totalVotosNulos++;
            console.log('O voto foi anulado');
        } else if (voto === 0) {
            totalVotos--;
            console.log('A votação foi encerrada pelo usuário');
        } else {
            return;
        }

    } while (voto !== 0);

    // apresentar as estatísticas da votação

    // determinar um ganhador

    // apresentar ganhador ou empate

}