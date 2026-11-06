import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    max-width: 500px; /* Limita a largura máxima para o card não esticar demais na tela */
    background-color: #1e1e2c;
    border: 1px solid #3b3b50;
    position: relative;
    margin-bottom: 24px;
    border-radius: 20px;
    overflow: hidden;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px; /* Retornado ao padding original */
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF80;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    object-fit: cover;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #23DD7A;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
    }
`