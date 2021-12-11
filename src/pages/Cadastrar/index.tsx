import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/core";
import { Container, Form, FormRow, Label, SubTitle, TextInput, Title } from './style'
import { Button, ButtonText } from '../../components'
import { LoginTypes } from '../../types/ScreenStack.types';
import { useAuth } from '../../hook/auth';
import { IRegister, IUser } from '../../interfaces/User.interface';
import { Alert } from 'react-native';
import { AxiosError } from 'axios';

export default function Cadastrar({ navigation }: LoginTypes) {
    const { register } = useAuth()
    const [data, setData] = useState<IRegister>()

    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }

    function handleLogin() {
        navigation.navigate("Login")
    }

    async function handleRegister() {
        try {
            if (data?.email && data.name && data.password) {
                await register(data);
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
        } finally {
        }
    }

    return (
        <Container>
            <Form>
                <Title>Registre-se</Title>
                <SubTitle>Já possui uma conta?</SubTitle>
                <ButtonText title="Faça Login" onPress={handleLogin} />
                <FormRow>
                    <Label>Nome</Label>
                    <TextInput placeholder="Nome" onChangeText={(i) => handleChange({ name: i })}></TextInput>
                </FormRow>
                <FormRow>
                    <Label>E-mail</Label>
                    <TextInput placeholder="E-mail" onChangeText={(i) => handleChange({ email: i })}></TextInput>
                </FormRow>
                <FormRow>
                    <Label>Senha</Label>
                    <TextInput placeholder="Senha" onChangeText={(i) => handleChange({ password: i })}></TextInput>
                </FormRow>
                <Button title="Cadastrar" onPress={handleRegister} />
                <ButtonText title="Voltar" onPress={handleLogin} />
            </Form>
        </Container>
    )
}