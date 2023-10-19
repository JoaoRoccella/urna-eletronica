function urnaEletronica() {

    // declaração de variáveis
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    let voto;
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;
    let encerrarVotacao;
    let senhaMesario;
    
    console.log('Início do programa');

    console.clear();
    console.log('** CONFIGURAÇÃO DA URNA **');

    senhaMesario = parseInt(prompt('Digite sua senha de mésário:'));
    
    do {
        nomeCandidato1 = prompt('Digite o nome do candidato 1:');
        nomeCandidato2 = prompt('Digite o nome do candidato 2:');
        nomeCandidato3 = prompt('Digite o nome do candidato 3:');

        console.log('** NOMES DOS CANDIDATOS **');
        console.log('Candidato 1: ' + nomeCandidato1);
        console.log('Candidato 2: ' + nomeCandidato2);
        console.log('Candidato 3: ' + nomeCandidato3);

    } while (!confirm('Se os nomes dos candidatos estão corretos, clique OK para continuar ou CANCELAR para voltar e digitar novamente'));
    
    do {

        console.clear();
        console.log('Opções de voto:');
        console.log('[1] Candidato 1: ' + nomeCandidato1);
        console.log('[2] Candidato 2: ' + nomeCandidato2);
        console.log('[3] Candidato 3: ' + nomeCandidato3);
        console.log('[5] Voto em branco');

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
        } else if (voto === 0) {
            return;
        } else if (voto === senhaMesario) {
            
            // segundo passo de confirmação para encerrar
            encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').toUpperCase();
            
            if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
                alert('Opcão inválida');
            }

            totalVotos--;
            
        } else {
            
            if (confirm('ATENÇÃO: o seu voto será ANULADO. Deseja prosseguir?')) {
                votosNulos++;
            } else {
                totalVotos--;
            }
        }

    } while (encerrarVotacao !== 'S');

    // Saída para o usuário: boletim de urna
    console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log('Total de votos: ' + totalVotos);

    // se houver votação
    if (totalVotos > 0) {

        console.log('Total de votos do candidato(a) ' + nomeCandidato1 + ': ' + votosCandidato1 + ' votos (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato(a) ' + nomeCandidato2 + ': ' + votosCandidato2 + ' votos (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato(a) ' + nomeCandidato3 + ': ' + votosCandidato3 + ' votos (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos brancos: ' + votosBrancos + ' votos (' + (votosBrancos / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos nulos: ' + votosNulos + ' votos (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)');

        // determinação do ganhador
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

        // exibição do ganhador
        console.log('-------');
        if (ganhador) {
            console.log('O ganhador desta urna foi ' + nomeGanhador + ' com ' + votosGanhador + ' votos (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
        } else {
            console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos');
        }
        
    } else {
        console.log('Não houve votação  nesta urna');
    }

    console.log('Fim do programa');

}