import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Informacoes, DadosPessoais, Anotacoes, ConhecaoProjeto, Camera } from "../pages"
import colors from "../styles/colors";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.orange},
      }}>
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Dados Pessoais" component={DadosPessoais} />
      <Drawer.Screen name="Anotações" component={Anotacoes} />
      <Drawer.Screen name="Informações" component={Informacoes} />
      <Drawer.Screen name="Conheça o Projeto" component={ConhecaoProjeto}/>
      <Drawer.Screen name="Camera" component={Camera}/>
    </Drawer.Navigator>
  );
}