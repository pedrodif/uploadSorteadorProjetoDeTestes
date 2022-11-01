// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';

// Components
import ListaParticipantes from './ListaParticipantes';

// Hooks
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

// Mock
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe('Uma lista vazia de participantes' , () => {
  // preenchendo o mock - Arrange
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })

  test('deve ser renderizada sem elementos', () => {
    // Renderizar o componente - Arrange
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    // Buscar o elemento em tela - Act
    const itens = screen.queryAllByRole('listitem')

    // Fazer a verificação - Assert
    expect(itens).toHaveLength(0)
  })
})

describe('Uma lista preenchida de participantes' , () => {
  // Criando uma lista ficticia de participantes
  const participantes = ['Ana', 'Catarina']

  // preenchendo o mock - Arrange
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test('deve ser renderizada com elementos', () => {
    // Renderizar o componente - Arrange
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    // Buscar o elemento em tela - Act
    const itens = screen.queryAllByRole('listitem')

    // Fazer a verificação - Assert
    expect(itens).toHaveLength(participantes.length)
  })
})