import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Column, Row, Title, Subtitle, Text, JaTenhoConta, FazerLogin } from './styles';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cadastro = () => {
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = (formData) => {
        console.log('formData', formData);
    };

    console.log('errors', errors);


  return (
    <>
        <Header autenticado={false}/>
        <Container>
            <Column flex={2}>
                <Row>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Row>
            </Column>
            <Column flex={1}>
            <Row>
                <Subtitle>Comece agora grátis</Subtitle>
                </Row>
                <Row>
                <Text>Crie sua conta e make the change.</Text>
                </Row>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                    {errors.nome && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                </Row>
                <Row>    
                    <JaTenhoConta>Já tenho conta. </JaTenhoConta> <Link to="/login"> <FazerLogin>Fazer login</FazerLogin> </Link>
                </Row>
            </Column>
        </Container>
    </>
  )
}

export { Cadastro }; 
