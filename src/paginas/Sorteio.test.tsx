// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';

// Hooks
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

// Components
import Sorteio from './Sorteio';

// Mock
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe('na pagina do sorteio', () => {

  const participantes = [
    'Ana',
    'Catarina',
    'Jorel'
  ]

  // preenchendo o mock - Arrange
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
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
})