import React, { useState } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
// libs
import { Text, useTheme } from 'react-native-paper'
// components
import Header from './components/Header'
import WalletCard from './components/WalletCard'
import ExchangeRate from './components/ExchangeRate'
import Actions from './components/Actions'
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

const Home: React.FC = () => {
  // hooks
  const theme = useTheme()
  // state
  const [balanceIsVisible, setBalanceIsVisible] = useState(true)

  const renderItem = ({ item, index }) => {
    return (
      <WalletCard
        item={item}
        isLast={index + 1 === data.length}
        balanceIsVisible={balanceIsVisible}
      />
    )
  }

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

        <FlatList
          horizontal
          data={data}
          pagingEnabled
          snapToInterval={304}
          decelerationRate="fast"
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />

        <ExchangeRate />
      </ScrollView>
    </View>
  )
}

export default Home
