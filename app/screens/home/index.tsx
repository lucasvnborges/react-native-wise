import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Avatar, Text, useTheme } from 'react-native-paper';
import { useAuth } from '@realm/react';
import { Icon } from '../../components/Icon';
import { SmallButton } from '../../components/Paper';
import WalletCard from './components/Wallet';
import Header from './components/Header';
import {
  Container,
  BalanceContainer,
  BalanceText,
  ActionButtonsContainer,
  ExchangeRateContainer,
  ExchangeRateText,
} from './styles';
import ExchangeRate from './components/ExchangeRate';

const Home: React.FC = () => {
  const theme = useTheme();
  const auth = useAuth();

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
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 32, paddingHorizontal: 16 }}>
          <Text style={{ fontFamily: 'regular', fontSize: 16 }}>
            Total balance
          </Text>
          <Text style={{ fontFamily: 'semibold', fontSize: 34 }}>**** BRL</Text>
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
            renderItem={WalletCard}
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