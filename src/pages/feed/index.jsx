import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                
            </Column>
            <Column flex={2}>
              <TitleHighlight> RANKING DA SEMANA </TitleHighlight>
                <UserInfo nome="José da  Silva" image="https://github.com/HigorCamposGit.png" percentual={95}/>
                <UserInfo nome="Maria Almeida" image="https://github.com/HigorCamposGit.png" percentual={70}/>
                <UserInfo nome="Bento Vianna" image="https://github.com/HigorCamposGit.png" percentual={50}/>
                <UserInfo nome="Anderson Silva" image="https://github.com/HigorCamposGit.png" percentual={40}/>
                <UserInfo nome="Higor de Campos"  image="https://github.com/HigorCamposGit.png" percentual={20}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
