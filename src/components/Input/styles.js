import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    /* Opcional: faz a linha inferior reagir sutilmente quando o input é focado */
    &:focus-within {
        border-bottom-color: #fa055f; 
    }
`

export const IconContainer = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF80; /* Padroniza a cor caso utilize ícones em texto */
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex: 1;
    border: 0;
    height: 30px;
    outline: none; /* Remove a borda azul padrão do navegador ao focar */
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;

    /* Estiliza o texto placeholder para ficar legível e bonito */
    &::placeholder {
        color: #FFFFFF80;
    }
`