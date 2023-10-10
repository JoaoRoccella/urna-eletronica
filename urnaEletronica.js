function urnaEletronica() {

    let opcao, contadorTotalDeVotos = 0;
    
    do {
        
        console.log('Repetição', contadorTotalDeVotos);
        
        opcao = parseInt(prompt('Digite a opção:'));

        contadorTotalDeVotos++;

    } while (opcao !== 0);

    contadorTotalDeVotos--;

    console.log('Contagem:', contadorTotalDeVotos);

}