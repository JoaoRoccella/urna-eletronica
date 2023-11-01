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

async function verificaUrnaAtual() {
    
    let hashUrnaAtual;
    let hashValido;
        
    await fetch('urnaEletronica.js')
        .then(response => response.text())
        .then(response => CryptoJS.SHA256(response).toString())
        .then(response => hashUrnaAtual = response);
            
    await fetch('hashValido')
        .then(response => response.text())
        .then(response => hashValido = response);

    return {
        hashUrnaAtual: hashUrnaAtual,
        hashValido: hashValido,
        status: hashUrnaAtual === hashValido
    }

}

async function audioConfirmacao() {
    const audio = new Audio('./confirmacao.mp3');
    await audio.play();
}

// Declarando o retorno explicitamente como um objeto do tipo Promise
// function audioConfirmacao() {
//     return new Promise((resolve) => {
//         const audio = new Audio('./confirmacao.mp3');
//         audio.onended = resolve;
//         audio.play();
//     });
// }

async function urnaEletronica() {

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
    let primeiraConfiguracao = true;
    let opcaoNome;

    let dataHoraInicial, dataHoraFinal;

    console.log('Início do programa');

    console.log('** CONFIGURAÇÃO DA URNA **');
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));

    if (primeiraConfiguracao) {
        nomeCandidato1 = prompt(`Digite o nome do candidato 1:`);
        nomeCandidato2 = prompt(`Digite o nome do candidato 2:`);
        nomeCandidato3 = prompt(`Digite o nome do candidato 3:`);
        primeiraConfiguracao = false;
    } else {
        opcaoNome = parseInt(prompt(`
            Qual nome deseja alterar?\n\n
            [1] ${nomeCandidato1} \n
            [2] ${nomeCandidato2} \n
            [3] ${nomeCandidato3} \n 
        `));

        if (opcaoNome === 1) {
            nomeCandidato1 = prompt(`Digite o nome do candidato 1:`);
        } else if (opcaoNome === 2) {
            nomeCandidato2 = prompt(`Digite o nome do candidato 2:`);
        } else if (opcaoNome === 3) {
            nomeCandidato3 = prompt(`Digite o nome do candidato 3:`);
        } else {
            alert(`Opção inválida!`);
        }
    }

    // laço de votação
    dataHoraInicial = dataHoraAtual();

    do {

        console.clear();
        console.log(`[1] Candidato 1: ${nomeCandidato1}`);
        console.log(`[2] Candidato 2: ${nomeCandidato2}`);
        console.log(`[3] Candidato 3: ${nomeCandidato3}`);
        console.log(`[5] Voto em branco`);
        console.log(`[8] Voto nulo`);

        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        if (voto === 1) {
            votosCandidato1++;
            await audioConfirmacao();
        } else if (voto === 2) {
            votosCandidato2++;
            await audioConfirmacao();
        } else if (voto === 3) {
            votosCandidato3++;
            await audioConfirmacao();
        } else if (voto === 5) {
            votosBrancos++;
            await audioConfirmacao();
        } else if (voto === 8) {
            votosNulos++;
            await audioConfirmacao();
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
    
    await verificaUrnaAtual().then(verificacao => {
        if (verificacao.status) {
            console.log('Hashes verificados, urna íntegra.');
        } else {
            console.log('URNA ADULTERADA, DEVE SER DESCARTADA');
            console.log(`Hash da urna: ${verificacao.hashUrnaAtual}`);
            console.log(`Hash esperado: ${verificacao.hashValido}`);
        }
        console.log('Fim do programa');
    });
}