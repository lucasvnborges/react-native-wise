import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context'
import { AppProvider, RealmProvider, UserProvider } from '@realm/react'
import { OpenRealmBehaviorType } from 'realm'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import { schemas } from './models'
import { defaultTheme } from './theme'
import { AuthNavigation, MainNavigation } from './navigation'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

type Props = {
  appId: string
}

const App: React.FC<Props> = ({ appId }) => {
  let [fontsLoaded] = useFonts({
    regular: Inter_400Regular,
    medium: Inter_500Medium,
    semibold: Inter_600SemiBold,
    bold: Inter_700Bold,
    extra: Inter_800ExtraBold,
    black: Inter_900Black,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider theme={defaultTheme}>
        <AppProvider id={appId}>
          <ThemeProvider theme={defaultTheme}>
            <UserProvider fallback={<AuthNavigation />}>
              <RealmProvider
                schema={schemas}
                sync={{
                  flexible: true,
                  newRealmFileBehavior: {
                    type: OpenRealmBehaviorType.DownloadBeforeOpen,
                  },
                  existingRealmFileBehavior: {
                    type: OpenRealmBehaviorType.OpenImmediately,
                  },
                }}
              >
                <SafeAreaView style={{ flex: 1 }}>
                  <GestureHandlerRootView style={{ flex: 1 }}>
                    <MainNavigation />
                  </GestureHandlerRootView>
                </SafeAreaView>
              </RealmProvider>
            </UserProvider>
          </ThemeProvider>
        </AppProvider>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

export default App
