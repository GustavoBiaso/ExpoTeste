import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { Container, Form, FormRow, Label, SubTitle, TextInput, Title } from '../styles/Login'
import { Button, ButtonText } from '../components'

export default function Cadastrar(){
    const navigation = useNavigation()
    function handleLogin() {
    navigation.navigate("Login")
    }
    return(
        <Container>
            <Form>
            <Title>Registre-se</Title>
            <SubTitle>Já possui uma conta?</SubTitle>
            <ButtonText title="Faça Login" onPress={handleLogin}/>
            <FormRow>
                <Label>Nome</Label>
                <TextInput placeholder="Nome"></TextInput>
            </FormRow>
            <FormRow>
                <Label>E-mail</Label>
                <TextInput placeholder="E-mail"></TextInput>
            </FormRow>
            <FormRow>
                <Label>Senha</Label>
                <TextInput placeholder="Senha"></TextInput>
            </FormRow>
            <Button title="Cadastrar" onPress={handleLogin}/>
            </Form>
        </Container>
    )
}