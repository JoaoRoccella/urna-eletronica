function urnaEletronica() {

    // declaração de variáveis
    let voto;
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;
    
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;

    let encerrarVotacao = '';
    let senhaMesario;

    console.log('Início do programa');

    console.log('** CONFIGURAÇÃO DA URNA **');
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));
    nomeCandidato1 = prompt('Digite o nome do candidato 1:');
    nomeCandidato2 = prompt('Digite o nome do candidato 2:');
    nomeCandidato3 = prompt('Digite o nome do candidato 3:');

    // laço de votação
    do {

        console.clear();
        console.log('[1] Candidato 1: ' + nomeCandidato1);
        console.log('[2] Candidato 2: ' + nomeCandidato2);
        console.log('[3] Candidato 3: ' + nomeCandidato3);
        console.log('[5] Voto em branco');
        console.log('[8] Voto nulo');

        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        if (voto === 1) {
            votosCandidato1++;
        } else if (voto === 2) {
            votosCandidato2++;
        } else if (voto === 3) {
            votosCandidato3++;
        } else if (voto === 5) {
            votosBrancos++;
        } else if (voto === 8) {
            votosNulos++;
        } else if (voto === senhaMesario) {

            encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').charAt(0).toUpperCase();

            if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
                alert('Opção inválida!');
            }

            totalVotos--;
        } else {
            return; // botão de emergência
        }

    } while (encerrarVotacao !== 'S');

    // apresenta os resultados
    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato1 + ': ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato2 + ': ' + votosCandidato2 + ' voto(s) (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato3 + ': ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos nulos: ' + votosNulos + ' voto(s) (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)');

    // determina o ganhador
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }

    // apresenta o ganhador
    console.log('------');
    
    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

}