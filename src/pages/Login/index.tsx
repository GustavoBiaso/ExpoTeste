import React, { useState } from 'react'
import { Container, Form, FormRow, Label, SubTitle, TextInput, Title } from './style'
import { Button, ButtonText } from '../../components'
import { LoginTypes } from '../../types/ScreenStack.types'
import { useAuth } from '../../hook/auth'
import { IAuthenticate, IUser } from '../../interfaces/User.interface'
import { Alert } from 'react-native'
import { AxiosError } from 'axios'

export default function Login({ navigation }: LoginTypes) {
    const { signIn } = useAuth()
    const [data, setData] = useState<IAuthenticate>()

    function handleCadastrar() {
        navigation.navigate('Cadastrar')
    }

    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }

    async function handleSignIn() {
        try {
            if (data?.email && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");
            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IUser;
            let message = "";
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
        }
    }
    return (
        <Container>
            <Form>
                <Title>Login</Title>
                <SubTitle>Ainda não tem uma conta?</SubTitle>
                <ButtonText title="Registre-se" onPress={handleCadastrar} />
                <FormRow>
                    <Label>E-mail</Label>
                    <TextInput placeholder="E-mail" onChangeText={(i) => handleChange({ email: i })}></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Senha</Label>
                    <TextInput placeholder="Senha" secureTextEntry={true} onChangeText={(i) => handleChange({ password: i })}></TextInput>
                </FormRow>
                <Button title="Entrar" onPress={handleSignIn} />
            </Form>
        </Container>
    )
}