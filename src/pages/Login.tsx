import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { Container, Form, FormRow, Label, SubTitle, TextInput, Title } from '../styles/Login'
import { Button, ButtonText } from '../components'

export default function Login(){
    const navigation = useNavigation()
    function handleCadastrar() {
    navigation.navigate("Cadastrar")
    }
    function handleHome() {
    navigation.navigate("Home")
    }
    return(
        <Container>
            <Form>
            <Title>Login</Title>
            <SubTitle>Ainda não tem uma conta?</SubTitle>
            <ButtonText title="Registre-se" onPress={handleCadastrar}/>
            <FormRow>
                <Label>E-mail</Label>
                <TextInput placeholder="E-mail"></TextInput>
            </FormRow>
            <FormRow>
                <Label>Senha</Label>
                <TextInput placeholder="Senha"></TextInput>
            </FormRow>
            <Button title="Entrar" onPress={handleHome}/>
            </Form>
        </Container>
    )
}