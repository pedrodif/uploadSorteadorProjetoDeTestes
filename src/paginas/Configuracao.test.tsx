// Packages
import React from 'react';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';

// Components
import Configuracao from './Configuracao';

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () =>  mockNavegacao
  }
})


describe('a pagina de configuração', () => {

  test('deve ser renderizada corretamente', () => {
    // Renderizar o componente
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    )

    // Validações - Asserções
    expect(container).toMatchSnapshot()
  })
})