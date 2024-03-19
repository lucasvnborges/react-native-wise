import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native'
import { Button } from '../../../components'
import { Text } from 'react-native-paper'

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const ProgressContainer = styled.View`
  padding: 24px;
`

const Content = styled.View`
  flex: 3;
`

const ImageContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: flex-end;
`

const TextContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`

const StyledText = styled(Text)`
  font-size: 38px;
  line-height: 36px;
  text-align: center;
  font-family: 'black';
  padding-vertical: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.onBackground};
`

const ButtonContainer = styled.View`
  flex: 1;
  padding: 0 24px;
  justify-content: center;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const GoogleSignInButton = styled(Button)`
  margin-top: 16px;
`

export {
  Container,
  ProgressContainer,
  Content,
  ImageContainer,
  TextContainer,
  StyledText,
  ButtonContainer,
  Row,
  GoogleSignInButton,
}
