// functions
import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {

  test('cada participante não sortei o próprio nome', () => {
    // Criando o mock
    const participantes = [
      'Ana',
      'Catarina',
      'Juliana',
      'João',
      'Vinicius',
      'Nathália'
    ]

    // Realizando o sorteio - disparando a ação
    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      // Verificações - Asserções
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})