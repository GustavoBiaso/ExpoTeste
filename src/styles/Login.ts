import styled from 'styled-components/native'
import colors from './colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 60px;
  color: ${colors.black};
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`
export const SubTitle = styled.Text`
  font-size: 25px;
  color: ${colors.black};
  font-weight: 500;
  text-align: center;
`

export const Form = styled.KeyboardAvoidingView`
align-items: center;
`
export const FormRow = styled.View`
  border-width: 2px;
  flex-direction: row;
  margin-top: 10px;
  padding: 5px;
`
export const Label = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  padding: 5px;
`
export const TextInput = styled.TextInput`
  font-size: 18px;
  padding: 5px;
  margin-left: 5px;
  width: 50%;
`