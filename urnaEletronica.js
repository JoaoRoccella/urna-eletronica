function dataHoraAtual() {
    const dataHora = new Date();

    return `${dataHora.getDate()}/${dataHora.getMonth() + 1}/${dataHora.getFullYear()} ${dataHora.getHours()}:${dataHora.getMinutes()}:${dataHora.getSeconds()} ${dataHora.getMilliseconds()}ms`;
}

function verificarIntegridadeUrna() {

    // Biblioteca CryptoJS: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js

    fetch('./urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(hashUrnaAtual => {
            fetch('./hashVerificado')
                .then(conteudo => conteudo.text())
                .then(hashVerificado => {
                    if (hashUrnaAtual === hashVerificado) {
                        console.log('Hash verificado, urna íntegra.')
                    } else {
                        console.log('HASHES DIFERENTES, URNA ADULTERADA!');
                        console.log(`Hash esperado: ${hashVerificado}`);
                        console.log(`Hash da urna: ${hashUrnaAtual}`);
                    }
                })
        });

}

function urnaEletronica() {

    // declaração de variáveis
    let candidatos = [
        [71, 'Lúcia', 0],
        [72, 'Edmundo', 0],
        [73, 'Pedro', 0],
        [74, 'Susana', 0],
        [75, 'Eustáquio', 0]
    ];
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    
    let voto;
    let votoValido;
    let ganhador = true;
    let encerrarVotacao;
    let senhaMesario;
    let dataHoraInicial;
    let dataHoraFinal;

    console.log(`Início do programa`);
    dataHoraInicial = dataHoraAtual();

    console.clear();
    console.log(`** CONFIGURAÇÃO DA URNA **`);

    senhaMesario = parseInt(prompt(`Defina a senha de mesário:`));

    document.getElementById('candidatos').innerHTML = 'Opções de voto:<br>';
    for (let i = 0; i < candidatos.length; i++) {
        document.getElementById('candidatos').innerHTML += `[${candidatos[i][0]}] ${candidatos[i][1]}<br>`;
    }
    document.getElementById('candidatos').innerHTML += `[5] Voto em branco`;

    console.clear();
    
    do {

        votoValido = false;


        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        for (i = 0; i < candidatos.length; i++) {
            if (voto === candidatos[i][0]) {
                if (confirm(`Candidato ${candidatos[i][1]} selecionado. CONFIRMA?`)) {
                    console.log(`Votos para o candidato ${candidatos[i][1]} (parcial): ${++candidatos[i][2]}`)
                } else {
                    alert(`Voto para o candidato ${candidatos[i][1]} cancelado, VOTE NOVAMENTE.`)
                    totalVotos--;
                }
                votoValido = true;
                break;
            }
        }

        if (!votoValido) {

            if (voto === 5) {
                votosBrancos++;
            } else if (voto === 0) {
                return;
            } else if (voto === senhaMesario) {

                // segundo passo de confirmação para encerrar
                encerrarVotacao = confirm(`Deseja REALMENTE encerrar a votação?`);
                if (encerrarVotacao) {
                    totalVotos--;
                }

            } else {

                if (confirm(`ATENÇÃO: o seu voto será ANULADO. Deseja prosseguir?`)) {
                    votosNulos++;
                } else {
                    totalVotos--;
                }
            }

        }

    } while (!encerrarVotacao);
    // fim do laço de votação

    dataHoraFinal = dataHoraAtual();

    // Saída para o usuário: boletim de urna
    console.clear();
    console.log(`** BOLETIM DE URNA **`);
    console.log(`Total de votos: ${totalVotos}`);

    // se houver votação
    if (totalVotos > 0) {

        for (i = 0; i < candidatos.length; i++) {

            console.log(`Total de votos do(a) candidato(a) ${candidatos[i][1]}: ${candidatos[i][2]} votos (${(candidatos[i][2] / totalVotos * 100).toFixed(2)}%)`);

        }

        console.log(`Total de votos brancos: ${votosBrancos} votos (${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);

        console.log(`Total de votos nulos: ${votosNulos} votos (${(votosNulos / totalVotos * 100).toFixed(2)}%)`);

        // determinação do ganhador
        candidatos.sort((a, b) => b[2] - a[2]);

        // exibição do ganhador
        console.log(`-------`);
        if (ganhador) {
            console.log(`O ganhador desta urna foi ${candidatos[0][1]} com ${candidatos[0][2]} votos (${(candidatos[0][2] / totalVotos * 100).toFixed(2)}%)`);
        } else {
            console.log(`Não houve ganhador nesta urna (empate entre 2 ou mais candidatos`);
        }

    } else {
        console.log(`Não houve votação  nesta urna`);
    }

    console.log(`Data e hora do início da votação: ${dataHoraInicial}`);
    console.log(`Data e hora do fim da votação: ${dataHoraFinal}`);

    verificarIntegridadeUrna();

    console.log(`Fim do programa`);

}