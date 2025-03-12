let votacaoLiberada = false;
let votacaoFinalizada = true;

let candidatos = {
    11: {
        nome: "João",
        partido: "PPCO - Partido do Pão Com Ovo",
        totalVotos: 0
    },
    12: {
        nome: "Edgard",
        partido: "PPCQ - Partido do Pão Com Queijo",
        totalVotos: 0
    }
}

let votosNulos = 0;

function verificaCandidato(numero) {
    return numero in candidatos;
}

function computaVoto(numero) {
    try {
        if (verificaCandidato(numero)) {
            candidatos[numero].totalVotos++;
        } else {
            votosNulos++;
        }
        votacaoFinalizada = true;
        return true;
    }
    catch (e) {
        console.log(e);
    }
    finally {
        votoDigitado = "";
    }

    return false;
}

function liberaVotacao() {
    votacaoLiberada = true;
    votacaoFinalizada = false;
}
