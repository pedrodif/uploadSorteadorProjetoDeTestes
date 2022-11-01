// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';

// Components
import ListaParticipantes from './ListaParticipantes';

// Mock
jest.mock('', () => {})

describe('Uma lista vazia de participantes' , () => {
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
    expect(itens).toHaveLength(participantes.length)
  })
})