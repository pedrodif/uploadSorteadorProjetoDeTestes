// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Rodape from './Rodape';

// Hooks
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

// Mock
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()

// Mock de Navegação
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () =>  mockNavegacao
  }
})

const mockSorteio = jest.fn()

// Mock do Sorteio
jest.mock('../state/hooks/useSorteador', () => {
  return {
    useSorteador: () =>  mockSorteio
  }
})

describe('onde não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })

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
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Jussara', 'João'])
  })

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

  test('a brincadeira foi iniciada', () => {
    // Renderizar componente não
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    // Capturar o elemento
    const botao = screen.getByRole('button')

    // Disparar o evento
    fireEvent.click(botao)

    // Validações - Asserções ->

    // Número de vezes chamado
    expect(mockNavegacao).toHaveBeenCalledTimes(1)

    //Verificando se foi chamado com a URL correta
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')

    //Verificando se o mock do sorteio foi chamado uma vez
    expect(mockSorteio).toHaveBeenCalledTimes(1)
  })
})