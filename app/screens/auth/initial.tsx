import React from 'react'
import { View, Image } from 'react-native'
import { ProgressBar, Text, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Button, LargeButton } from '../../components/Paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const uri = '../../assets/globe.png'

const google_icon =
  'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png'

export default function Initial() {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <SafeAreaView
      testID="initialScreen"
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <View style={{ padding: 24 }}>
        <ProgressBar
          progress={1}
          testID="initialScreenProgress"
          style={{ height: 6, borderRadius: 8 }}
          color={theme.colors.onPrimaryContainer}
        />
      </View>

      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Image
          resizeMode="contain"
          testID="initialScreenImage"
          source={require(uri)}
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          testID="initialScreenTextOneAccount"
          variant="bodyMedium"
          style={{
            padding: 16,
            fontSize: 40,
            lineHeight: 34,
            fontFamily: 'black',
            textAlign: 'center',
            color: theme.colors.primary,
          }}
        >
          ONE ACCOUNT FOR ALL THE MONEY IN THE WORLD
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          padding: 24,
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            marginBottom: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <LargeButton
            mode="contained"
            testID="initialScreenLoginButton"
            style={{ width: '47.5%' }}
            textColor={theme.colors.onPrimaryContainer}
            buttonColor={theme.colors.primaryContainer}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Log in
          </LargeButton>
          <LargeButton
            mode="contained"
            testID="initialScreenRegisterButton"
            style={{ width: '47.5%' }}
            textColor={theme.colors.onPrimaryContainer}
            buttonColor={theme.colors.primaryContainer}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            Register
          </LargeButton>
        </View>

        <Button
          mode="outlined"
          onPress={console.log}
          testID="initialScreenGoogleAuthButton"
          icon={() => (
            <Image
              resizeMode="contain"
              source={{ uri: google_icon }}
              style={{ width: 16, height: 16, marginHorizontal: 4 }}
            />
          )}
          textColor={theme.colors.onBackground}
        >
          Sig in with Google
        </Button>
      </View>
    </SafeAreaView>
  )
}
