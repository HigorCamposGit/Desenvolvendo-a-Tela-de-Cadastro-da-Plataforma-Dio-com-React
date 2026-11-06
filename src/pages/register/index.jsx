import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import {
  Container,
  Column,
  ErrorText,
  Title,
  TitleLogin,
  SubtitleLogin,
  Wrapper,
  AlreadyHaveAccount,
  BoldText,
  InlineComponents,
  DescriptionTerms,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlinePerson, MdEmail, MdLock, MdPhone } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const schema = yup
    .object({
      username: yup.string().required("Nome obrigatório"),
      celular: yup.string().required("Celular obrigatório"),
      email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
      senha: yup.string().min(3, "Senha muito curta").required("Senha obrigatória"),
    })
    .required();

  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigate("/feed");
  };

  const handleHaveAccount = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        {/* Coluna da Esquerda: Formulário de cadastro */}
        <Column>
          <Wrapper>
            <TitleLogin>Dados pessoais</TitleLogin>
            <SubtitleLogin>Insira suas informações abaixo</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdOutlinePerson />}
                name="username"
                control={control}
              />
              {errors?.username && (
                <ErrorText>Insira corretamente o seu nome</ErrorText>
              )}

              <Input
                placeholder="Celular"
                type="tel"
                leftIcon={<MdPhone />}
                name="celular"
                control={control}
              />
              {errors?.celular && (
                <ErrorText>{errors?.celular?.message}</ErrorText>
              )}

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors?.email && <ErrorText>E-mail é obrigatório</ErrorText>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors?.senha && <ErrorText>{errors?.senha?.message}</ErrorText>}

              <DescriptionTerms>
                Ao clicar no botão "Criar minha conta", você aceita nossos Termos de uso e Políticas de Privacidade.
              </DescriptionTerms>
              
          <InlineComponents>
              <BoldText>Já tenho conta | &nbsp;&nbsp;</BoldText>
              <AlreadyHaveAccount onClick={handleHaveAccount}>
              Fazer Login
             </AlreadyHaveAccount>
          </InlineComponents>

              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
          </Wrapper>
        </Column>

        {/* Coluna da Direita: Texto de destaque da DIO */}
        <Column>
          <Title>
            Acesso para sempre a +2.150 cursos, bootcamps, projetos, formações em tecnologia e inteligência artificial. E receba o dobro de créditos do AI Job Hunter, os agentes de emprego da DIO que te conectam e te preparam para as melhores vagas no Brasil e no exterior.
          </Title>
        </Column>
      </Container>
    </>
  );
};

export { Register };