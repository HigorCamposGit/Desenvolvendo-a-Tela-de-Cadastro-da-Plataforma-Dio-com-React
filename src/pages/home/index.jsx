import { useNavigate  } from "react-router-dom";
import bannerImage from '../../assets/banner.png'

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import { Container, Title, TitleHighlight, TextContent } from './styles';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Acesso para sempre a +2.150 cursos, inglês e IA !! <br />
                    </TitleHighlight>
                Seu futuro profissional agora!</Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Button title="Começe seu futuro agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal do site DIO." />
            </div>
        </Container>
    </>)
}

export { Home }