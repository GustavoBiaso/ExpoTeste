import React from 'react'
import { Container, Message, Title } from './styles'
import { Header } from '../../components'

export default function Informacoes() {

    return (
        <Container>
            <Header hello="Olá" name="Gustavo" image={require("../../../assets/img/fotodapessoa.png")} />
            <Title>Conheça o projeto</Title>
            <Message>     O Homework Helper é uma plataforma feita para ajudar alunos a organizarem melhor as suas atividades e horários.</Message>
            <Message>     Esta plataforma está sendo desenvolvida como projeto de dois alunos do terceiro ano do curso de informática do CEFET-MG! Caso você goste da plataforma ou seja o professor Lázaro lendo esse texto muito obrigado por pelo menos ter dado essa conferida no projeto!</Message>
        </Container>
    )
}