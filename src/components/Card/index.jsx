import { FiThumbsUp } from 'react-icons/fi';
import React from 'react';
import fundo from '../../assets/fundo.jpg';

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={fundo}/>
      <Content>
        <UserInfo>
          <UserPicture src="https://github.com/HigorCamposGit.png" />
         <div>
          <h4>Higor de Campos</h4>
          <p>Foramação concluída há 1 mês</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Formação Front-end</h4>
          <p>Desafio de criar uma página de cadastro...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>HTML | CSS | Javascript</h4>
          <p>
            <FiThumbsUp /> 9
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
