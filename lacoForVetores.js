// Estruturas de Dados: Vetores Bidimensionais (matrizes)
// const minhaMatriz = [
//     [71, 72, 73],
//     ['Candidato 1', 'Candidato 2', 'Candidato3'],
//     ['PPF', 'PPCO', 'PPM']
// ];
// for (i = 0; i <= 2; i++) {

//     for (j = 0; j <= 2; j++) {

//         console.log(minhaMatriz[i][j]);

//     }
// }

// for (j = 0; j <= 2; j++) {
    
//     console.log('Nº candidato: ' + minhaMatriz[0][j]);
//     console.log('Nome do candidato: ' + minhaMatriz[1][j]);
//     console.log('Partido: ' + minhaMatriz[2][j]);

//     console.log();

// }









// Estruturas de dados: Vetores Unidimensionais (Array)

const tabuada = [6, 8];

for (i = 0; i < tabuada.length; i++) {
    console.log('Tabuada do ' + tabuada[i]);
    for (j = 0; j <= 10; j+=2) {
        console.log(tabuada[i] + ' x ' + j + ' = ' + (tabuada[i] * j));
    }
    console.log();
}