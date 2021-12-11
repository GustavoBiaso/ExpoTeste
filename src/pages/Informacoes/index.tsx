import React from 'react'
import { Container, Message, Title } from './styles'
import { Header } from '../../components'

export default function Informacoes() {

    return (
        <Container>
            <Header hello="Olá" name="Gustavo" image={require("../../../assets/img/fotodapessoa.png")} />
            <Title>Informações</Title>
            <Message>     O Homework Helper é uma plataforma feita para ajudar alunos a organizarem melhor as suas atividades e horários para melhor desempenho acadêmico!</Message>
            <Message>     Com a ajuda da plataforma será moleza você estudar de maneira mais eficaz e continua, sem perder o foco.</Message>
        </Container>
    )
}