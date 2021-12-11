import React from 'react'
import { Container } from './styles'
import { Header } from '../../components'

export default function DadosPessoais() {
    return (
        <Container>
            <Header hello="Olá" name="Gustavo" image={require("../../../assets/img/fotodapessoa.png")} />

        </Container>
    )
}