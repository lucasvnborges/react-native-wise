import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Keyboard, ScrollView } from 'react-native'
import { Realm, useApp } from '@realm/react'
import { Text, TextInput, useTheme, IconButton } from 'react-native-paper'
import { Button } from '../../components/Paper'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export enum AuthState {
  None,
  Loading,
  LoginError,
  RegisterError,
}

const RegisterScreen = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const app = useApp()
  const refPassword = useRef(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authState, setAuthState] = useState(AuthState.None)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const handleLogin = useCallback(async () => {
    setAuthState(AuthState.Loading)
    const credentials = Realm.Credentials.emailPassword(email, password)
    try {
      await app.logIn(credentials)
      setAuthState(AuthState.None)
    } catch (e) {
      setAuthState(AuthState.LoginError)
    }
  }, [email, password, setAuthState, app])

  const handleRegister = useCallback(async () => {
    setAuthState(AuthState.Loading)

    try {
      await app.emailPasswordAuth.registerUser({ email, password })

      const credentials = Realm.Credentials.emailPassword(email, password)

      await app.logIn(credentials)
      setAuthState(AuthState.None)
    } catch (e) {
      setAuthState(AuthState.RegisterError)
    }
  }, [email, password, setAuthState, app])

  return (
    <SafeAreaView
      testID="registerScreen"
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar style="dark" backgroundColor="#fff" />

      <View>
        <View style={{ height: 54, paddingHorizontal: 12 }}>
          <IconButton
            size={26}
            mode="contained"
            icon="arrow-left"
            testID="registerScreenBackButton"
            iconColor={theme.colors.primary}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{ paddingHorizontal: 24, paddingVertical: 12 }}>
          <Text
            testID="registerScreenTitle"
            style={{ fontFamily: 'semibold', fontSize: 30 }}
          >
            Create new account
          </Text>
        </View>
      </View>

      <ScrollView
        testID="registerScreenScrollView"
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.form}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <View style={styles.inputContainer}>
          <Text
            testID="registerScreenLabelEmailInput"
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
            textContentType="emailAddress"
            testID="registerScreenEmailInput"
            outlineStyle={{ borderRadius: 12 }}
            error={
              authState === AuthState.LoginError ||
              authState === AuthState.RegisterError
            }
            onSubmitEditing={() => refPassword.current?.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text
            testID="registerScreenLabelPasswordInput"
            style={{ fontFamily: 'regular', marginBottom: 4 }}
          >
            Password
          </Text>
          <TextInput
            label=""
            mode="outlined"
            value={password}
            ref={refPassword}
            textContentType="oneTimeCode"
            onChangeText={setPassword}
            testID="registerScreenPasswordInput"
            outlineStyle={{ borderRadius: 12 }}
            secureTextEntry={secureTextEntry}
            blurOnSubmit={false}
            onSubmitEditing={() => Keyboard.dismiss()}
            error={
              authState === AuthState.LoginError ||
              authState === AuthState.RegisterError
            }
            right={
              <TextInput.Icon
                testID="registerScreenButtonShowPassword"
                onPress={() => setSecureTextEntry(!secureTextEntry)}
                icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
              />
            }
          />
        </View>

        {authState === AuthState.LoginError && (
          <Text
            style={[styles.error]}
            testID="registerScreenErrorMessageAreCorrect"
          >
            Make sure the email and password are correct
          </Text>
        )}
        {authState === AuthState.RegisterError && (
          <Text
            style={[styles.error]}
            testID="registerScreenErrorMessageTryAgain"
          >
            There was an error registering, please try again
          </Text>
        )}

        <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.buttonStyle}
            testID="registerScreenButtonContinue"
            contentStyle={styles.buttonContentStyle}
            disabled={authState === AuthState.Loading}
            textColor={theme.colors.onPrimaryContainer}
            buttonColor={theme.colors.primaryContainer}
          >
            Continue
          </Button>
        </View>

        <View style={{ padding: 24 }}>
          <Text
            style={{ fontFamily: 'regular', textAlign: 'center' }}
            testID="registerScreenTermsPrivacyPolicy"
          >
            By registering, you accept our{' '}
            <Text
              style={{
                fontFamily: 'bold',
                textDecorationLine: 'underline',
                color: theme.colors.onPrimaryContainer,
              }}
            >
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text
              style={{
                fontFamily: 'bold',
                textDecorationLine: 'underline',
                color: theme.colors.onPrimaryContainer,
              }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    padding: 12,
    paddingVertical: 32,
    // justifyContent: 'center',
  },
  inputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  error: {
    fontSize: 12,
    marginTop: 12,
    color: '#f66',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    padding: 64,
    maxHeight: 300,
  },
  buttonStyle: {
    marginTop: 12,
  },
  buttonContentStyle: {
    height: 48,
  },
  labelStyle: {
    fontSize: 16,
  },
})

export default RegisterScreen
