# Algoritmo da urna eletrônica (inicial)

1. Inicie o programa

2. Zere os contadores de votação

3. Apresente ao usuário a lista de opções para votação:
```
| 1 | Candidato 1
| 2 | Candidato 2
| 3 | Candidato 3
| 5 | Voto em branco
| 8 | Voto nulo
| 0 | Encerrar a votação
```

4. solicite ao usuário que ele escolha uma das opções acima

5. Com base da escolha do usuário para a opção do voto:

    5.1 caso a opção do usuário seja 1, some 1 voto para o candidato 1

    5.2 caso a opção do usuário seja 2, some 1 voto para o candidato 2

    5.3 caso a opção do usuário seja 3, some 1 voto para o candidato 3

    5.4 caso a opção do usuário seja 5, some 1 voto como "branco"

    5.5 caso a opção do usuário seja 8, some 1 voto como "nulo"

6. enquanto a opção do usuário não for "0", repita os passos

7. apresente a quantidade e percentual de votos válidos do candidato 1

8. apresente a quantidade e percentual de votos válidos do candidato 2

9. apresente a quantidade e percentual de votos válidos do candidato 3

10. apresente a quantidade e percentual de votos válidos do candidato 4

11. apresente a quantidade e percentual de votos brancos

12. apresente a quantidade e percentual de votos nulos

13. Determine o candidato ganhador:

    13.1 Se o candidato 1 teve mais votos que o candidato 2 e 3, ele é o ganhador

    13.2 se o canddiato 2 teve mais votos que o candidato 1 e 3, ele é o ganhador

    13.3 se o candidato 3 teve mais votos que o candidato 1 e 2, ele é o ganhador

    13.4 caso nenhuma das condições seja atendida, houve empate, portanto não há um ganhador

14. Apresente a situação final:

    14.1 se houver ganhador, apresente o candidato ganhador, o total de votos e percentual de votos incluídos os votos em branco;

    14.2 se não houver ganhador, informe que a situação é de empate

15. termine o programa