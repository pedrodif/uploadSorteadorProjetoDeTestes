// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';

// ComponentsS
import Rodape from './Rodape';

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