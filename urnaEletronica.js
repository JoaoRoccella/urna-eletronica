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

async function votacaoCargos() {

    // declaração de variáveis
    let candidatos;
    let cargos;

    await fetch('./database.json').then(data => data.json()).then(data => {
        candidatos = data.candidatos;
        cargos = data.cargos;
    });

    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;

    let voto;
    let votoValido;


    for (i = 0; i < cargos.length; i++) {

        votoValido = false;

        voto = parseInt(prompt(`Cargo: ${cargos[i].nomeCargo}. \nDigite sua opção de voto:`));

        totalVotos++;

        for (j = 0; j < candidatos.length; j++) {

            if (voto === candidatos[j].id && candidatos[j].idCargo === cargos[i].id) {

                if (confirm(`Candidato ${candidatos[j].nome} selecionado. CONFIRMA?`)) {

                    await audioConfirmacao();

                    console.log(`Votos para o candidato ${candidatos[j].nome} (parcial): ${++candidatos[j].totalVotos}`);

                } else {

                    alert(`Voto para o candidato ${candidatos[j].nome} cancelado, VOTE NOVAMENTE.`);

                    totalVotos--;

                }

                votoValido = true;

                break;
            }
        }

        if (!votoValido) {

            if (voto === 5) {
                if (confirm(`Você está VOTANDO EM BRANCO. CONFIRMA?`)) {
                    await audioConfirmacao();
                    console.log(`Votos em branco (parcial): ${++votosBrancos}`)
                } else {
                    alert(`Voto em branco cancelado, VOTE NOVAMENTE.`)
                    totalVotos--;
                }
            } else {

                if (confirm(`ATENÇÃO: Código inválido. \nO seu voto será ANULADO. Deseja prosseguir?`)) {

                    await audioConfirmacao();

                    votosNulos++;

                } else {

                    totalVotos--;

                    i--;
                }
            }
        }
        
    }
}

async function urnaEletronica() {

    let ganhador = true;
    let dataHoraInicial;
    let dataHoraFinal;

    let settings;

    await fetch('./database.json').then(data => data.json()).then(data => {
        settings = data.settings;
    });

    console.log(`Início do programa`);

    dataHoraInicial = dataHoraAtual();

    do {

        if (confirm('Liberar')) {

            await votacaoCargos();
            alert('Todos os votos CONFIRMADOS');

        } else {

            if (parseInt(prompt('Digite a senha')) === settings.senhaMesario) {
                break;
            }

        }

    } while (true);


    dataHoraFinal = dataHoraAtual();

    // Saída para o usuário: boletim de urna
    console.clear();
    console.log(`** BOLETIM DE URNA **`);
    console.log(`Total de votos: ${totalVotos}`);

    // se houver votação
    if (totalVotos > 0) {

        for (i = 0; i < candidatos.length; i++) {

            console.log(`Total de votos do(a) candidato(a) ${candidatos[i].nome}: ${candidatos[i].totalVotos} votos (${(candidatos[i].totalVotos / totalVotos * 100).toFixed(2)}%)`);

        }

        console.log(`Total de votos brancos: ${votosBrancos} votos (${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);

        console.log(`Total de votos nulos: ${votosNulos} votos (${(votosNulos / totalVotos * 100).toFixed(2)}%)`);

        // determinação do ganhador
        candidatos.sort((a, b) => b.totalVotos - a.totalVotos);

        if (candidatos[0].totalVotos === candidatos[1].totalVotos) {
            ganhador = false;
        }

        // exibição do ganhador
        console.log(`-------`);
        if (ganhador) {
            console.log(`O ganhador desta urna foi ${candidatos[0].nome} com ${candidatos[0].totalVotos} votos (${(candidatos[0].totalVotos / totalVotos * 100).toFixed(2)}%)`);
        } else {
            console.log(`Não houve ganhador nesta urna (empate entre 2 ou mais candidatos)`);
        }

    } else {
        console.log(`Não houve votação  nesta urna`);
    }

    console.log(`Data e hora do início da votação: ${dataHoraInicial}`);
    console.log(`Data e hora do fim da votação: ${dataHoraFinal}`);

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
