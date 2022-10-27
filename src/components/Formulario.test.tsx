import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from './Formulario';

// Vamos utilizar uma função chamada "test" da biblioteca Jest

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {

  // Passos:
  // Para começar a seguir o passo a passo será preciso renderizar o componente
  render(<Formulario />)

  // Primeiro -> encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  // Segundo -> encontrar o botão
  const botao = screen.getByRole('button')

  // Terceiro -> garantir que o input esteja no documento
  expect(input).toBeInTheDocument()

  // Quarto -> garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled()
})