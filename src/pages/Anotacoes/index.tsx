import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { ButtonRow, Container } from './styles'
import { Header, ButtonHome } from '../../components'

export default function Anotacoes(){
    const navigation = useNavigation()

    return(
        <Container>
            <Header hello="Olá" name="Gustavo" image={require("../../../assets/img/fotodapessoa.png")} />
        
        </Container>
    )
}