import React from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProgressBar, Text, useTheme } from 'react-native-paper'
import styled from 'styled-components/native'
import { NavigationProp } from '@react-navigation/native'
import { AuthStackParamList } from '../../navigation'
import { Button } from '../../components'

const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.View`
  flex: 1;
  padding: 24px;
`

const ProgressContainer = styled.View`
  padding-bottom: 24px;
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
  color: ${({ theme }) => theme.colors.onBackground};
`

const ButtonContainer = styled.View`
  flex: 1;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const GoogleSignInButton = styled(Button)`
  margin-top: 16px;
`

const uri = '../../assets/globe.png'

type Props = {
  navigation: NavigationProp<AuthStackParamList>
}

const steps = [
  {
    img: '../../assets/jars.png',
    description: 'One account for all the money in the world',
  },
  {
    img: '../../assets/plane.png',
    description: 'One account for all the money in the world',
  },
  {
    img: '../../assets/graph.png',
    description: 'One account for all the money in the world',
  },
  {
    img: '../../assets/globe.png',
    description: 'One account for all the money in the world',
  }
]

export default function Initial({ navigation }: Props): React.JSX.Element {
  const theme = useTheme()

  return (
    <Background>
      <Container>
        <ProgressContainer>
          <ProgressBar
            progress={1}
            style={{ height: 6, borderRadius: 8 }}
            color={theme.colors.onPrimaryContainer}
          />
        </ProgressContainer>

        <ImageContainer>
          <Image
            resizeMode="contain"
            source={require(uri)}
            style={{ width: '100%', height: '100%' }}
          />
        </ImageContainer>

        <TextContainer>
          <StyledText variant="bodyMedium">
            ONE ACCOUNT FOR ALL THE MONEY IN THE WORLD
          </StyledText>
        </TextContainer>

        <ButtonContainer>
          <Row>
            <Button
              rounded
              size="large"
              mode="contained"
              fontSize={18}
              fontFamily="bold"
              style={{ width: '47.5%' }}
              textColor={theme.colors.onPrimaryContainer}
              buttonColor={theme.colors.primaryContainer}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              Log in
            </Button>
            <Button
              rounded
              size="large"
              mode="contained"
              fontSize={18}
              fontFamily="bold"
              style={{ width: '47.5%' }}
              textColor={theme.colors.onPrimaryContainer}
              buttonColor={theme.colors.primaryContainer}
              onPress={() => navigation.navigate('RegisterScreen')}
            >
              Register
            </Button>
          </Row>

          <GoogleSignInButton
            rounded
            mode="outlined"
            fontSize={18}
            fontFamily="bold"
            iconName="google"
            onPress={console.log}
            textColor={theme.colors.onBackground}
            buttonColor={theme.colors.background}
          >
            Sign in with Google
          </GoogleSignInButton>
        </ButtonContainer>
      </Container>
    </Background>
  )
}
