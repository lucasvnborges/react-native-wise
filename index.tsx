import 'expo-dev-client'
import 'react-native-get-random-values'
import React from 'react'
import App from './app/App'
import { SYNC_CONFIG } from './config'
import { registerRootComponent } from 'expo'

registerRootComponent(() => <App appId={SYNC_CONFIG.appId} />)
