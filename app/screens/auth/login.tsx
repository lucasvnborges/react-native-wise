import styled from 'styled-components/native'
import React, { useCallback, useRef, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Realm, useApp } from '@realm/react'
import { Text, useTheme, IconButton } from 'react-native-paper'
import { NavigationProp } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthStackParamList } from '../../navigation'
import { Button } from '../../components'
import { TextInput } from '../../components/Paper'

export enum AuthState {
  None,
  Loading,
  LoginError,
  RegisterError,
}

type Props = {
  navigation: NavigationProp<AuthStackParamList>
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const Header = styled(View)`
  height: 54px;
  padding-horizontal: 12px;
`

const Title = styled(Text)`
  font-size: 30px;
  padding-vertical: 12px;
  padding-horizontal: 24px;
  font-family: 'semibold';
`

const FormContainer = styled(View)`
  flex: 1;
  padding: 12px;
  padding-vertical: 32px;
`

const InputContainer = styled(View)`
  padding-vertical: 8px;
  padding-horizontal: 12px;
`

const ErrorText = styled(Text)`
  color: #f66;
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
`

const ButtonContainer = styled(View)`
  margin-top: 12px;
  padding-horizontal: 12px;
`

const StyledButton = styled(Button)`
  margin-top: 12px;
`

export default function LoginScreen({ navigation }: Props) {
  // hooks
  const theme = useTheme()
  // realm
  const { logIn } = useApp()
  // ref
  const refPassword = useRef(null)
  // state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authState, setAuthState] = useState(AuthState.None)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const handleLogin = useCallback(async () => {
    setAuthState(AuthState.Loading)
    const credentials = Realm.Credentials.emailPassword(email, password)
    try {
      await logIn(credentials)
      setAuthState(AuthState.None)
    } catch (e) {
      setAuthState(AuthState.LoginError)
    }
  }, [email, password, setAuthState, logIn])

  return (
    <Container testID="loginScreen">
      <Header>
        <IconButton
          size={26}
          mode="contained"
          icon="arrow-left"
          testID="loginScreenBackButton"
          iconColor={theme.colors.primary}
          onPress={() => navigation.goBack()}
        />
      </Header>
      <Title testID="loginScreenScreenTitle">Log in</Title>
      <ScrollView
        testID="loginScreenScrollView"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <FormContainer>
          <InputContainer>
            <Text
              testID="loginScreenEmailLabel"
              style={{ fontFamily: 'regular', marginBottom: 4 }}
            >
              Email
            </Text>
            <TextInput
              label=""
              autoFocus
              value={email}
              mode="outlined"
              autoCorrect={false}
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={setEmail}
              testID="loginScreenEmailInput"
              textContentType="emailAddress"
              outlineStyle={{ borderRadius: 12 }}
              error={
                authState === AuthState.LoginError ||
                authState === AuthState.RegisterError
              }
              onSubmitEditing={() => refPassword.current?.focus()}
            />
          </InputContainer>
          <InputContainer>
            <Text
              testID="loginScreenPasswordLabel"
              style={{ fontFamily: 'regular', marginBottom: 4 }}
            >
              Password
            </Text>
            <TextInput
              label=""
              mode="outlined"
              value={password}
              ref={refPassword}
              textContentType="password"
              onChangeText={setPassword}
              testID="loginScreenPasswordInput"
              outlineStyle={{ borderRadius: 12 }}
              secureTextEntry={secureTextEntry}
              error={
                authState === AuthState.LoginError ||
                authState === AuthState.RegisterError
              }
              right={
                <TextInput.Icon
                  testID="loginScreenButtonShowPassword"
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                  icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
                />
              }
            />
          </InputContainer>
          {authState === AuthState.LoginError && (
            <ErrorText testID="loginScreenCredentialsErrorMessage">
              Make sure the email and password are correct
            </ErrorText>
          )}
          <ButtonContainer>
            <StyledButton
              rounded
              fontSize={18}
              mode="contained"
              testID="loginScreenButton"
              onPress={handleLogin}
              disabled={authState === AuthState.Loading}
              textColor={theme.colors.onPrimaryContainer}
              buttonColor={theme.colors.primaryContainer}
            >
              Log In
            </StyledButton>
            <StyledButton
              underline
              fontSize={18}
              onPress={console.log}
              testID="loginScreenRecoveryButton"
              disabled={authState === AuthState.Loading}
              textColor={theme.colors.onPrimaryContainer}
            >
              Trouble logging in?
            </StyledButton>
          </ButtonContainer>
        </FormContainer>
      </ScrollView>
    </Container>
  )
}
