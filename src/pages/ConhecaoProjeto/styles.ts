import styled from "styled-components/native";
import { StatusBar } from 'react-native'
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
`

export const ButtonRow = styled.View`
  align-items: center;
  margin-top: 60px;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 40px;
  color: ${colors.black};
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`

export const Message = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  line-height: 37px;
  width: 90%;
  margin-left: 20px;
`