function verificaUrnaAtual() {

    fetch('urnaEletronica.js')
        .then(response => response.text())
        .then(response => CryptoJS.SHA256(response).toString())
        .then(hashUrnaAtual => {
            
            fetch('hashValido')
                .then(response => response.text())
                .then(hashValido => {

                    if (hashUrnaAtual === hashValido) {
                        console.log('Urna verificada, código íntegro.')
                    } else {
                        console.log('URNA ADULTERADA! HASHES NÃO CONFEREM!')
                        console.log(`HASH DA URNA: ${hashUrnaAtual}`);
                        console.log(`HASH ESPERADO: ${hashValido}`);
                    }

                })
            
        });

}

function dataHoraAtual() {
    
    const dataHora = new Date();
    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1;
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours();
    const min = dataHora.getMinutes();
    const seg = dataHora.getSeconds();
    const ms = dataHora.getMilliseconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${ms}`;
}

function urnaEletronica() {

    let candidatos = [
        [11, 'Gandalf The Grey', 0],
        [12, 'Frodo Baggins', 0],
        [13, 'Samwise Gamgee', 0],
        [14, 'Pippin Took', 0],
        [15, 'Merry Brandybuck', 0]
    ];
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    
    let voto;
    let votoValido = false;
    
    let ganhador = true;
    let encerrarVotacao;
    let senhaMesario;

    let dataHoraInicial
    let dataHoraFinal;

    console.log('Início do programa');

    console.log('** CONFIGURAÇÃO DA URNA **');
    
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));

    console.clear();
    
    // laço de votação
    dataHoraInicial = dataHoraAtual();
    
    do {

        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        for (i = 0; i < candidatos.length; i++) {
            if (voto === candidatos[i][0]) {
                if (confirm(`
                Voto selecionado para o candidato ${candidatos[i][1]}. Deseja CONFIRMAR?
                Pressione [OK] para CONFIRMAR seu voto ou [CANCELAR] para votar novamente.`)) {
                    console.log(`Votos registrados para o candidato ${candidatos[i][1]} (parcial): ${++candidatos[i][2]}`);

                }
                votoValido = true;
            }
        }
        
        if (!votoValido) {

            if (voto === 5) {
                votosBrancos++;
            } else if (voto === senhaMesario) {
    
                if (encerrarVotacao = confirm(`
                Deseja REALMENTE encerrar a votação?
                Pressione [OK] para ENCERRAR a votação e [CANCELAR] para CONTINUAR a votação.`)) {
                    totalVotos--;
                }
    
            } else if (voto === 0) {
                return; // botão de emergência
            } else {
                if (confirm(`
                Você votou uma opção inválida (${voto}) e seu voto será ANULADO. 
                Deseja prosseguir?
                Pressione [OK] para ANULAR seu voto e [CANCELAR] para CORRIGIR e VOTAR NOVAMENTE.`)) {
                    votosNulos++;
                } else {
                    totalVotos--;
                    alert('Voto corrigido, você deve VOTAR NOVAMENTE');
                }
            }
        }

    } while (!encerrarVotacao);

    // apresenta os resultados
    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);

    console.log(`Total de votos do(a) candidato(a) ${nomeCandidato1}: ${votosCandidato1} voto(s) (${(votosCandidato1 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos do(a) candidato(a) ${nomeCandidato2}: ${votosCandidato2} voto(s) (${(votosCandidato2 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos do(a) candidato(a) ${nomeCandidato3}: ${votosCandidato3} voto(s) (${(votosCandidato3 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos brancos: ${votosBrancos} voto(s) (${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos nulos: ${votosNulos} voto(s) (${(votosNulos / totalVotos * 100).toFixed(2)}%)`);

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

    dataHoraFinal = dataHoraAtual();
    
    console.log(`Data/hora de início da votação: ${dataHoraInicial}`);
    console.log(`Data/hora de encerramento da votação: ${dataHoraFinal}`);
    
    verificaUrnaAtual();

    console.log('Fim do programa');

}