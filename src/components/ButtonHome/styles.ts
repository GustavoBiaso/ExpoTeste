import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colors.yellow};
  border-radius: 35px;
  justify-content: flex-start;
  flex-content;
  margin-top: 10px;
  width: 70%;
  flex-direction: row;
`

export const ButtonStyleText = styled.Text`
 color: ${colors.black};
 padding: 10px;
 width: 60%;
 font-size: 18px;
`

export const ImageStyle = styled.Image`
margin: 10px;
`
