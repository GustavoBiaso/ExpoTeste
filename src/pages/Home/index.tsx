import React from 'react'
import { ButtonRow, Container } from './styles'
import { Header, ButtonHome } from '../../components'
import { LoginTypes } from '../../types/ScreenStack.types'
import { useAuth } from '../../hook/auth'

export default function Home({ navigation }: LoginTypes) {

    const { user } = useAuth()
    function handleLogin() {
        navigation.navigate("Login")
    }
    return (
        <Container>
            {user && (
                <Header hello="Olá" name={user?.name} image={require("../../../assets/img/fotodapessoa.png")} />
            )}
            <ButtonRow>
                <ButtonHome title="Precisa de ajuda? Clique aqui!" onPress={() => handleLogin()} image={require("../../../assets/img/interrogacao.png")} />
            </ButtonRow>
            <ButtonRow>
                <ButtonHome title="Alguma dúvida? Fale Conosco!" onPress={() => handleLogin()} image={require("../../../assets/img/pessoa.png")} />
            </ButtonRow>
            <ButtonRow>
                <ButtonHome title="Primeira vez? Faça um tutorial!" onPress={() => handleLogin()} image={require("../../../assets/img/exclamacao.png")} />
            </ButtonRow>
            <ButtonRow>
                <ButtonHome title="Quer conhecer mais o projeto?" onPress={() => handleLogin()} image={require("../../../assets/img/folhas.png")} />
            </ButtonRow>

        </Container>
    )
}