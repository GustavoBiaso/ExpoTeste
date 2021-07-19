import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { Container } from './styles'
import { Header } from '../../components'

export default function Login(){
    const navigation = useNavigation()
    function handleCadastrar() {
    navigation.navigate("Cadastrar")
    }
    return(
        <Container>
            <Header hello="Olá" name="Gustavo" image={require("../../../assets/img/fotodapessoa.png")} />
        </Container>
    )
}