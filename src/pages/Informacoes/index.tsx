import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { ButtonRow, Container, Message, Title } from './styles'
import { Header, ButtonHome } from '../../components'

export default function Informacoes(){
    const navigation = useNavigation()

    return(
        <Container>
            <Header hello="Olá" name="Gustavo" image={require("../../../assets/img/fotodapessoa.png")} />
            <Title>Informações</Title>
            <Message>     O Homework Helper é uma plataforma feita para ajudar alunos a organizarem melhor as suas atividades e horários para melhor desempenho acadêmico!</Message>
            <Message>     Com a ajuda da plataforma será moleza você estudar de maneira mais eficaz e continua, sem perder o foco.</Message>
        </Container>
    )
}