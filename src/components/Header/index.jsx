import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { 
  Container, 
  Wrapper, 
  BuscarInputContainer, 
  Input, 
  Row, 
  Menu, 
  MenuRight, 
  UserPicture 
} from './styles';
import { useNavigate } from 'react-router-dom';

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img 
            src={logo} 
            alt="Logo da DIO" 
            style={{ cursor: 'pointer' }}
            onClick={() => handleNavigate('')}
          />
          {autenticado && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu onClick={() => handleNavigate('feed')}>Cursos |</Menu>
              <Menu onClick={() => handleNavigate('feed')}>Formações |</Menu>
              <Menu onClick={() => handleNavigate('feed')}>Carreira Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture 
              src="https://github.com/HigorCamposGit.png" 
              alt="Foto de Perfil Github"
            />
          ) : (
            <>
              <MenuRight onClick={() => handleNavigate('')} style={{ cursor: 'pointer' }}>
                Home
              </MenuRight>
              <Button title="Entrar" onClick={() => handleNavigate('login')} />
              <Button title="Cadastrar" onClick={() => handleNavigate('register')} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };