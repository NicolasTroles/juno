import React from 'react';
import { render, cleanup, fireEvent } from 'test/provider';

import FindCharacter from './FindCharacter';

afterEach(cleanup);

test('<FindCharacter /> - Testando preenchimento de campo busca', () => {
    const meuTexto = 'Meu Texto';

    const { getByPlaceholderText } = render(<FindCharacter />);

    const input = getByPlaceholderText('Qual o nome do personagem?');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: meuTexto } });
    expect(input.value).toBe(meuTexto);
});