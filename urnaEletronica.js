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

    console.log('Início do programa');

    // laço de votação
    do {

        console.clear();
        console.log('[1] Candidato 1');
        console.log('[2] Candidato 2');
        console.log('[3] Candidato 3');
        console.log('[5] Voto em branco');
        console.log('[8] Voto nulo');
        console.log('[0] Encerrar a votação');

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
        } else if (voto === 0) {
            totalVotos--;
        } else {
            return; // botão de emergência
        }

    } while (voto !== 0);

    // apresenta os resultados
    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);
    console.log('Total de votos do candidato 1: ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100) + '%)');
    console.log('Total de votos do candidato 2: ' + votosCandidato2 + ' voto(s) (' + (votosCandidato2 / totalVotos * 100) + '%)');
    console.log('Total de votos do candidato 3: ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100) + '%)');
    console.log('Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100) + '%)');
    console.log('Total de votos nulos: ' + votosNulos + ' voto(s) (' + (votosNulos / totalVotos * 100) + '%)');

    // determina o ganhador
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = 'Candidato 1';
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = 'Candidato 2';
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = 'Candidato 3';
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }

    // apresenta o ganhador
    console.log('------');
    
    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

}