import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #0e0d0d;
    border-radius: 22px;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease; 

    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    /* Hover para o botão padrão (primary) */
    &:hover {
        background: #1f1e1e;
    }
    
    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #fa055f;

        /* Hover específico para a variante vermelha */
        &:hover {
            background: #d90452; /* Um tom ligeiramente mais escuro/intenso no hover */
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #fd005d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
            transition: border-color 0.3s ease;
        }

        /* Opcional: faz a bordinha externa reagir sutilmente no hover também */
        &:hover::after {
            border-color: #ffffff;
        }
    `}
`