// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';

// Hooks
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';

// Components
import Sorteio from './Sorteio';

// Mock
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('na pagina do sorteio', () => {
  // criando mock de participantes
  const participantes = [
    'Ana',
    'Catarina',
    'Jorel'
  ]

  // criando mock do resultado
  const resultado = new Map([
    ['Ana', 'Jorel'],
    ['Jorel', 'Catarina'],
    ['Catarina', 'Ana']
  ]);

  // preenchendo o mock - Arrange
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  })

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    // Renderizar o componente
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    // Buscar o elemento em tela
    const opcoes = screen.queryAllByRole('option')

    // Validações - Asserções
    expect(opcoes).toHaveLength(participantes.length)
  })

  test('o amigo secreto é exibido quando solicitado', () => {
    // Renderizar o componente
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    // Buscar o elemento em template
    const select = screen.getByPlaceholderText('Selecione o seu nome')

    // Disparando o evento
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    // Buscar o botão o elemento
    const botao = screen.getByRole('button')

    // Disparando o evento no botão
    fireEvent.click(botao)

    // Asserções
    const amigoSecreto = screen.getByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()
  })
})