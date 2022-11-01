// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { act, fireEvent, render, screen } from '@testing-library/react';

// Components
import Formulario from './Formulario';

// O metódo describe('', () => {}) pode ser utilizado para agrupar os testes de forma semântica
describe('comportamento do componente Formulario.tsx', () => {

  // O metódo test('', () => {}) pode ser utilizada para iniciar um caso de teste
  test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    // Para começar a seguir o passo a passo será preciso renderizar o componente
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    // Primeiro -> Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Segundo -> Encontrar o botão
    const botao = screen.getByRole('button')

    // Terceiro -> Garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    // Quarto -> Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
  })

  test('adicionar um participante caso exista um nome preenchido', () => {
    // Para começar a seguir o passo a passo será preciso renderizar o componente
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    // Primeiro -> Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Segundo -> Encontrar o botão
    const botao = screen.getByRole('button')

    // Terceiro -> Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    // Quarto -> Clicar no botão de submeter
    fireEvent.click(botao)

    // Quinto -> Garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()

    // Sexto -> Garantir que o input não tenha um valor
    expect(input).toHaveValue("")
  })

  test('nomes duplicados não podem ser adicionados na lista', () => {
    // Para começar a seguir o passo a passo será preciso renderizar o componente
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    // Primeiro -> Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Segundo -> Encontrar o botão
    const botao = screen.getByRole('button')

    // Terceiro -> Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    // Quarto -> Clicar no botão de submeter
    fireEvent.click(botao)

    // Quinto -> Inserir novamente o mesmo valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    // Sexto -> Clicar novamente no botão de submeter
    fireEvent.click(botao)

    // Setimo -> Espera-se que haja uma mensagem de erro na tela
    const mensagemDeErro = screen.getByRole('alert')

    //Oitavo -> Verificar se a mensagem de erro está correta para o erro que está sendo tratado
    expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos')
  })


  test('a mensagem de erro deve sumir após os timers', () => {
    // Simulando a existência de um timer
    jest.useFakeTimers()

    // Para começar a seguir o passo a passo será preciso renderizar o componente
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    // Primeiro -> Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Segundo -> Encontrar o botão
    const botao = screen.getByRole('button')

    // Terceiro -> Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    // Quarto -> Clicar no botão de submeter
    fireEvent.click(botao)

    // Quinto -> Inserir novamente o mesmo valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    // Sexto -> Clicar novamente no botão de submeter
    fireEvent.click(botao)

    // Setimo -> Espera-se que haja uma mensagem de erro na tela
    let mensagemDeErro = screen.queryByRole('alert')

    //Oitavo -> Verificar se a mensagem de erro está no documento
    expect(mensagemDeErro).toBeInTheDocument()

    // Nono -> Liberar a contagem do Timer de N segundos
    act(() => {
      jest.runAllTimers()
    });

    // Decimo -> verificar se o campo que continha a mensagem de erro agora está nulo
    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull()
  })
})


