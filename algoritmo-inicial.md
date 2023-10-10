# Algoritmo da urna eletrônica (inicial)

1. Inicie o programa

2. Zere os contadores de votação

3. Execute a sequência de passos:

    3.1 Apresente ao usuário a lista de opções para votação:

    ```
    | 1 | Candidato 1
    | 2 | Candidato 2
    | 3 | Candidato 3
    | 5 | Voto em branco
    | 8 | Voto nulo
    | 0 | Encerrar a votação
    ```

    3.2 Solicite ao usuário que ele escolha uma das opções acima

    3.3 Com base na escolha do usuário para a opção do voto:

        3.3.1 caso a opção do usuário seja 1, some 1 voto para o candidato 1

        3.3.2 caso a opção do usuário seja 2, some 1 voto para o candidato 2

        3.3.3 caso a opção do usuário seja 3, some 1 voto para o candidato 3

        3.3.4 caso a opção do usuário seja 5, some 1 voto como "branco"

        3.3.5 caso a opção do usuário seja 8, some 1 voto como "nulo"

4. enquanto a opção do usuário não for "0", repita os passos

5. apresente a quantidade e percentual de votos válidos do candidato 1

6. apresente a quantidade e percentual de votos válidos do candidato 2

7. apresente a quantidade e percentual de votos válidos do candidato 3

8. apresente a quantidade e percentual de votos válidos do candidato 4

9. apresente a quantidade e percentual de votos brancos

10. apresente a quantidade e percentual de votos nulos

11. Determine o candidato ganhador:

    11.1 Se o candidato 1 teve mais votos que o candidato 2 e 3, então o candidato 1 é o ganhador

    11.2 se o canddiato 2 teve mais votos que o candidato 1 e 3, então o candidato 2 é o ganhador

    11.3 se o candidato 3 teve mais votos que o candidato 1 e 2, então o candidato 3 é o ganhador

    11.4 caso contrário, houve empate, portanto não há um ganhador

12. Apresente a situação final:

    12.1 se houver ganhador, então apresente:
    
        12.1.1 o candidato ganhador
        12.1.2 o total de votos
        12.1.3 o percentual de votos, incluídos os votos em branco

    12.2 caso contrário, informe que a situação é de empate

13. termine o programa