import React, { useState } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
// libs
import { Text, useTheme } from 'react-native-paper'
// components
import Icon from '../../components/Icon'
import { SmallButton } from '../../components/Paper'
import Header from './components/Header'
import WalletCard from './components/WalletCard'
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

        <View
          style={{
            marginVertical: 16,
            paddingHorizontal: 16,
            flexDirection: 'row',
          }}
        >
          <SmallButton
            compact
            mode="contained"
            onPress={console.log}
            style={{ marginRight: 12 }}
            textColor={theme.colors.onPrimaryContainer}
            buttonColor={theme.colors.primaryContainer}
            icon={() => (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Icon
                  size={18}
                  name="arrowUp"
                  color={theme.colors.onSurfaceVariant}
                />
              </View>
            )}
          >
            <Text
              style={{
                height: 21,
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'semibold',
              }}
            >
              Send
            </Text>
          </SmallButton>
          <SmallButton
            compact
            mode="contained"
            onPress={console.log}
            style={{ marginRight: 12 }}
            textColor={theme.colors.onSurfaceVariant}
            buttonColor={theme.colors.surfaceVariant}
            icon={() => (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Icon
                  size={18}
                  name="plus"
                  color={theme.colors.onSurfaceVariant}
                />
              </View>
            )}
          >
            <Text
              style={{
                height: 21,
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'semibold',
              }}
            >
              Add money
            </Text>
          </SmallButton>
          <SmallButton
            compact
            mode="contained"
            onPress={console.log}
            style={{ marginRight: 12 }}
            textColor={theme.colors.onSurfaceVariant}
            buttonColor={theme.colors.surfaceVariant}
            icon={() => (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Icon
                  size={18}
                  name="arrowDown"
                  color={theme.colors.onSurfaceVariant}
                />
              </View>
            )}
          >
            <Text
              style={{
                height: 21,
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'semibold',
              }}
            >
              Request
            </Text>
          </SmallButton>
        </View>

        <View style={{ flex: 1 }}>
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
              paddingTop: 16,
              paddingHorizontal: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>

        <View
          style={{ paddingTop: 50, paddingBottom: 6, paddingHorizontal: 16 }}
        >
          <Text style={{ fontFamily: 'semibold', fontSize: 26 }}>
            Exchange rate
          </Text>
        </View>

        <ExchangeRate />
      </ScrollView>
    </View>
  )
}

export default Home
