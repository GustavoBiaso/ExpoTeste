import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colors.gray};
  font-size: 18px;
  text-align: center;
  border-radius: 50px;
  border: 1px;
  width: 120px;
  margin-top: 10px;s
`

export const ButtonStyleText = styled.Text`
 color: ${colors.black};
 text-align: center;
 padding: 10px;
`