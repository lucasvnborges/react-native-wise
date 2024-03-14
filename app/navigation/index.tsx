import * as Linking from 'expo-linking'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InitialScreen from '../screens/auth/initial'
import LoginScreen from '../screens/auth/login'
import RegisterScreen from '../screens/auth/register'
import Tabs from './tab.navigation'

const Stack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()

const prefix = Linking.createURL('/')

export const AuthNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export const MainNavigation = () => {
  const linking = {
    prefixes: [prefix],
  }

  useEffect(() => {
    // Função para lidar com o deep link
    const handleDeepLink = (event: any) => {
      console.log('URL:', event.url)
      // Aqui, você pode navegar para a parte adequada do seu aplicativo ou fazer qualquer outro tratamento
    }

    // Adicionar observador
    const subscription = Linking.addEventListener('url', handleDeepLink)

    // Remover observador ao desmontar
    return () => {
      subscription.remove()
    }
  }, [])

  useEffect(() => {
    const getUrlAsync = async () => {
      try {
        const url = await Linking.getInitialURL()

        if (url) {
          console.log('Initial URL:', url)
        }
      } catch (error) {
        console.error('Error fetching the initial URL:', error)
      }
    }

    getUrlAsync()
  }, [])

  return (
    <NavigationContainer linking={linking}>
      <MainStack.Navigator
        initialRouteName="Tabs"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            animation: 'none',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
