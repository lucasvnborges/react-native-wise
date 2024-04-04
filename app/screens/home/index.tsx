import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
// libs
import { Text, useTheme } from 'react-native-paper'
// components
import Header from './components/Header'
import Actions from './components/Actions'
import Wallets from './components/Wallets'
import ExchangeRate from './components/ExchangeRate'
// utils
import { maskBalance } from '../../utils/mask'

const data = [
  {
    id: '1',
    text: 'AUD',
    balance: '0.00',
    uri: require('../../assets/audflag.png'),
  },
  {
    id: '2',
    text: 'EUR',
    balance: '0.00',
    uri: require('../../assets/eurflag.png'),
  },
  {
    id: '3',
    text: 'USD',
    balance: '0.00',
    uri: require('../../assets/euaflag.png'),
  },
]

export default function Home() {
  // hooks
  const theme = useTheme()
  // state
  const [balanceIsVisible, setBalanceIsVisible] = useState(true)

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Header
        balanceIsVisible={balanceIsVisible}
        handlePressEye={setBalanceIsVisible}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View style={{ marginTop: 32, paddingHorizontal: 16 }}>
          <Text style={{ fontFamily: 'regular', fontSize: 16 }}>
            Total balance
          </Text>
          <Text style={{ fontFamily: 'semibold', fontSize: 34 }}>
            {maskBalance('0.00', balanceIsVisible)} BRL
          </Text>
        </View>

        <Actions />

        <Wallets data={data} balanceIsVisible={balanceIsVisible} />

        <ExchangeRate />
      </ScrollView>
    </View>
  )
}
