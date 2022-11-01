// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';

// Components
import Rodape from './Rodape';

// Mock
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})


describe('onde não existem participantes suficientes', () => {
  test('a brincadeira não pode ser iniciada', () => {
    // Renderizar componente não
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    // Capturar o elemento
    const botao = screen.getByRole('button')

    // Asserções - Verificações
    expect(botao).toBeDisabled();
  })
})

describe('quando existem participantes suficientes', () => {
  test('A brincadeira pode ser inciada', () => {
    // Renderizar componente não
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    // Capturar o elemento
    const botao = screen.getByRole('button')

    // Verificação de element
    expect(botao).not.toBeDisabled()

  })
})