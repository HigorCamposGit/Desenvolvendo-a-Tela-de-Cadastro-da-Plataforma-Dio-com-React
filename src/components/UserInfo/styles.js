import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    align-items: center; /* Opcional: alinha a foto e o texto verticalmente se houver diferença de altura */
` 

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;
    object-fit: cover; /* Mantém a proporção correta da foto de perfil */
`

export const NameText = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
` 

export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF30; /* Deixei um branco levemente translúcido no fundo da barra para dar contraste, ou pode manter #FFFFFF */
    border-radius: 3px;
    position: relative;
    overflow: hidden; /* Garante que a barrinha verde interna respeite os cantos arredondados */

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percentual }) => percentual || 0}%; /* Proteção caso a prop percentual venha vazia */
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
        transition: width 0.4s ease; /* Animação suave caso a porcentagem mude dinamicamente */
    }
`