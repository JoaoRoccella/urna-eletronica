/*
 * Simulação de uma urna eletrônica
 * Autor: João Roccella
 * Conceitos: fluxograma, variáveis, leia, escreva, limpa, escolha-caso,
 * faca-enquanto, se, inicialização, operadores lógicos, precedência
 * 
 * Desafios 1 ao 10 resolvidos
 * 
*/

programa
{
	inclua biblioteca Matematica	--> mt
	inclua biblioteca Tipos 		--> tp
	inclua biblioteca Sons		--> sm
	inclua biblioteca Util		--> ul
	inclua biblioteca Texto		--> tx
	inclua biblioteca Calendario	--> dt
	
	funcao inicio()
	{
		inteiro 
			codigoVoto,
			votosTotais = 0, 
			votosCandidato1 = 0, 
			votosCandidato2 = 0, 
			votosCandidato3 = 0,
			votosBranco = 0, 
			votosNulo = 0,
			votosTotaisGanhador = 0
			
		inteiro
			senhaMesario = 789456,
			somConfirmacao = sm.carregar_som("audio/confirma-urna.mp3"),
			tempoAguarde = 2000 // em milisegundos
		
		real 
			percentualVotosCandidato1 = 0.0, 
			percentualVotosCandidato2 = 0.0,
			percentualVotosCandidato3 = 0.0,
			percentualVotosBranco = 0.0,
			percentualVotosNulo = 0.0,
			percentualGanhador = 0.0
			
		
		cadeia
			nomeCandidato1,
			nomeCandidato2,
			nomeCandidato3,
			nomeGanhador = "",
			dataInicioVotacao,
			dataFinalVotacao

		caracter 
			opcaoFim = 'N',
			opcaoInicio = 'L'
			
		logico 
			opcaoInvalida	= falso,
			iniciaVotacao	= falso,
			situacaoEmpate	= falso,
			somHabilitado	= verdadeiro

		// Laço responsável pela configuração da Urna
		faca {

			limpa()
			
			se (opcaoInvalida) {
				escreva("\t ** Opção inválida! \n\n")
			}
			
			escreva("\t ** Configuração da Urna Eletrônica \n\n")
			
			escreva("\t >> Digite o nome do candidato 1: ")
			leia(nomeCandidato1)
			
			escreva("\t >> Digite o nome do candidato 2: ")
			leia(nomeCandidato2)
			
			escreva("\t >> Digite o nome do candidato 3: ")
			leia(nomeCandidato3)

			limpa()
			escreva("\t ** Candidatos configurados:\n\n")
			escreva("\t | 1 | ", nomeCandidato1, "\n")
			escreva("\t | 2 | ", nomeCandidato2, "\n")
			escreva("\t | 3 | ", nomeCandidato3, "\n\n")

			escreva("\t ** Liberação da Urna: \n\n")
			escreva("\t | L | Liberar urna para votação\n")
			escreva("\t | C | Configurar novamente\n\n")
			
			escreva("\t >> Digite a opção desejada: ")
			leia(opcaoInicio)

			se (opcaoInicio == 'L' ou opcaoInicio == 'l') {
				iniciaVotacao = verdadeiro
			} senao se (opcaoInicio != 'C' e opcaoInicio != 'c') {
				opcaoInvalida = verdadeiro
			}
			
			
		} enquanto (nao iniciaVotacao)

		dataInicioVotacao = dataAtual()
		
		// Laço responsável pela votação
		faca {
			
			limpa()
			
			se (opcaoInvalida) {
				escreva("\t ** Opção inválida! \n\n")
			}
			
			escreva("\t ** Opções de voto: \n\n")
			escreva("\t | 1 | ", nomeCandidato1, "\n")
			escreva("\t | 2 | ", nomeCandidato2, "\n")
			escreva("\t | 3 | ", nomeCandidato3, "\n")
			escreva("\t | 5 | Voto em branco \n")
			escreva("\t | 8 | Voto nulo \n\n")
	
			escreva("\t >> Digite agora o código do seu voto: ")
			leia(codigoVoto)
	
			escolha(codigoVoto) {
				caso senhaMesario:
					
					limpa()
					
					escreva("\t ** Deseja realmente encerrar a votação? \n\n")
					escreva("\t >> Digite S para confirmar: ")
					
					leia(opcaoFim)

					se (opcaoFim == 'n' ou opcaoFim == 'N') {
						codigoVoto = -1
					}
					
					pare
					
				caso 1:
					votosCandidato1++
					votosTotais++
					opcaoInvalida = falso
					se (somHabilitado) {
						sm.reproduzir_som(somConfirmacao, falso)
					}
					limpa()
					escreva("\t ** VOTO CONFIRMADO!")
					ul.aguarde(tempoAguarde)
					pare
					
				caso 2:
					votosCandidato2++
					votosTotais++
					opcaoInvalida = falso
					se (somHabilitado) {
						sm.reproduzir_som(somConfirmacao, falso)
					}
					limpa()
					escreva("\t ** VOTO CONFIRMADO!")
					ul.aguarde(tempoAguarde)
					pare
					
				caso 3:
					votosCandidato3++
					votosTotais++
					opcaoInvalida = falso
					se (somHabilitado) {
						sm.reproduzir_som(somConfirmacao, falso)
					}
					limpa()
					escreva("\t ** VOTO CONFIRMADO!")
					ul.aguarde(tempoAguarde)
					pare
					
				caso 5:
					votosBranco++
					votosTotais++
					opcaoInvalida = falso
					se (somHabilitado) {
						sm.reproduzir_som(somConfirmacao, falso)
					}
					limpa()
					escreva("\t ** VOTO CONFIRMADO!")
					ul.aguarde(tempoAguarde)
					pare
					
				caso 8:
					votosNulo++
					votosTotais++
					opcaoInvalida = falso
					se (somHabilitado) {
						sm.reproduzir_som(somConfirmacao, falso)
					}
					limpa()
					escreva("\t ** VOTO CONFIRMADO!")
					ul.aguarde(tempoAguarde)
					pare
					
				caso contrario:
					opcaoInvalida = verdadeiro
			}
		} enquanto (codigoVoto != senhaMesario)

		dataFinalVotacao = dataAtual()
		
		// Determinar o ganhador
		se (votosCandidato1 > votosCandidato2 e votosCandidato1 > votosCandidato3) {
			
			nomeGanhador = nomeCandidato1
			votosTotaisGanhador = votosCandidato1 + votosBranco
		} senao se (votosCandidato2 > votosCandidato1 e votosCandidato2 > votosCandidato3) {
			
			nomeGanhador = nomeCandidato2
			votosTotaisGanhador = votosCandidato2 + votosBranco
		} senao se (votosCandidato3 > votosCandidato1 e votosCandidato3 > votosCandidato2) {
			
			nomeGanhador = nomeCandidato3
			votosTotaisGanhador = votosCandidato3 + votosBranco
		} senao {

			situacaoEmpate = verdadeiro
		}
		
		
		limpa()
		escreva("\t ** Boletim de urna: \n\n")
		
		// Esta condição evita a divisão por 0 caso a votação seja encerrada sem nenhum voto
		se (votosTotais != 0) {
			
			percentualGanhador = (tp.inteiro_para_real(votosTotaisGanhador) / tp.inteiro_para_real(votosTotais)) * 100.0
		
			escreva("\t Total de votos: ", votosTotais, "\n")
			
			escreva("\t Votos no candidato ",nomeCandidato1, ": ", votosCandidato1, " (", 
				mt.arredondar(tp.inteiro_para_real(votosCandidato1) / tp.inteiro_para_real(votosTotais) * 100.0, 2), "%)\n")
			
			escreva("\t Votos no candidato ",nomeCandidato2, ": ", votosCandidato2, " (", 
				mt.arredondar(tp.inteiro_para_real(votosCandidato2) / tp.inteiro_para_real(votosTotais) * 100.0, 2), "%)\n")
			
			escreva("\t Votos no candidato ",nomeCandidato3, ": ", votosCandidato3, " (", 
				mt.arredondar(tp.inteiro_para_real(votosCandidato3) / tp.inteiro_para_real(votosTotais) * 100.0, 2), "%)\n")
			
			escreva("\t Votos em branco: ", votosBranco, " (", 
				mt.arredondar(tp.inteiro_para_real(votosBranco) / tp.inteiro_para_real(votosTotais) * 100.0, 2), "%)\n")
			
			escreva("\t Votos nulos: ", votosNulo, " (", 
				mt.arredondar(tp.inteiro_para_real(votosNulo) / tp.inteiro_para_real(votosTotais) * 100.0, 2), "%)\n\n")
				
		} senao {
			
			escreva("\t ** Nenhum voto registrado\n")
			
		}
		
		se (nao situacaoEmpate) {
			escreva("\t ** Ganhador nesta urna: \n\n")
			escreva("\t ", tx.caixa_alta(nomeGanhador), ", com ", votosTotaisGanhador, " votos (", 
				mt.arredondar(percentualGanhador, 2), "%) somados os votos em branco")
		} senao se (votosTotais != 0) {
			escreva("\t ** Não foi possível determinar um ganhador nesta \n\t    urna (houve empate entre os candidatos mais votados)")
		}

		escreva("\n\n")
		escreva("\t Início da votação: ", dataInicioVotacao, "\n\t Final da votação: ", dataFinalVotacao)
		escreva ("\n")
	}

	funcao cadeia dataAtual() {

		cadeia data = 
			tx.preencher_a_esquerda('0', 2, tp.inteiro_para_cadeia(dt.dia_mes_atual(), 10)) + "/" + 
			tx.preencher_a_esquerda('0', 2, tp.inteiro_para_cadeia(dt.mes_atual(), 10)) + "/" + 
			tx.preencher_a_esquerda('0', 4, tp.inteiro_para_cadeia(dt.ano_atual(), 10)) + " " + 
			tx.preencher_a_esquerda('0', 2, tp.inteiro_para_cadeia(dt.hora_atual(falso), 10)) + ":" + 
			tx.preencher_a_esquerda('0', 2, tp.inteiro_para_cadeia(dt.minuto_atual(), 10)) + ":" +
			tx.preencher_a_esquerda('0', 2, tp.inteiro_para_cadeia(dt.segundo_atual(), 10))
		
		retorne data
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 799; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */