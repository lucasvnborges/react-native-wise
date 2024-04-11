import React, { useState } from 'react'
import CardList from './CardList'
import { AntDesign } from '@expo/vector-icons'
import { Image, RefreshControl } from 'react-native'
import { Text, TouchableRipple, useTheme } from 'react-native-paper'
import {
  Container,
  AvailableBalance,
  ActionsContainer,
  ActionWrapper,
  ActionButton,
  Row,
  CardArrivingContainer,
  Column,
  ManageCardContainer,
  ManageCardTitleWrapper,
  ManageCardOptionIcon,
} from './styles'

const actions = [
  {
    label: 'Add money',
    icon: 'plus',
  },
  {
    label: 'Card details',
    icon: 'creditcard',
  },
  {
    label: 'Freeze card',
    icon: 'lock',
  },
]

const manageCardOptions = [
  {
    icon: 'Safety',
    label: 'Show PIN',
  },
  {
    icon: 'setting',
    label: 'Manage payment methods',
  },
  {
    icon: 'rest',
    label: 'Travel hub',
  },
  {
    icon: 'paperclip',
    label: 'Label card',
  },
  {
    icon: 'unlock',
    label: 'Unlock PIN',
  },
  {
    icon: 'retweet',
    label: 'Replace card',
  },
]

export default function Card() {
  // hooks
  const theme = useTheme()
  // state
  const [refreshing, setRefreshing] = useState(false)
  const [availableBalance, setAvailableBalance] = useState('450')

  const handleChangeCard = (value: any) => {
    setAvailableBalance(value)
  }

  // Função para simular um carregamento assíncrono
  const fetchData = () => {
    setTimeout(() => {
      setRefreshing(false)
    }, 2000) // Simula um tempo de carregamento de 2 segundos
  }

  const handleRefresh = () => {
    setRefreshing(true)
    fetchData()
  }

  const Action = ({ label, icon }: { label: string; icon: any }) => (
    <ActionWrapper>
      <ActionButton
        size={28}
        iconColor={theme.colors.onSurface}
        containerColor={theme.colors.surface}
        onPress={() => console.log('Pressed')}
        icon={() => <AntDesign name={icon} size={24} color="black" />}
      />

      <Text style={{ fontFamily: 'semibold', marginTop: 4 }}>{label}</Text>
    </ActionWrapper>
  )

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={[theme.colors.primaryContainer]}
          tintColor={theme.colors.primaryContainer}
        />
      }
    >
      <AvailableBalance>
        <Text style={{ fontSize: 26, fontFamily: 'semibold', marginBottom: 6 }}>
          {availableBalance} BRL
        </Text>
        <Text style={{ fontSize: 14, fontFamily: 'regular' }}>
          Available to spend{' '}
          <AntDesign name="questioncircleo" size={13} color="black" />
        </Text>
      </AvailableBalance>

      <CardList onChangeCard={handleChangeCard} />

      <ActionsContainer>
        {actions.map((action, index) => (
          <Action key={index} icon={action.icon} label={action.label} />
        ))}
      </ActionsContainer>

      <TouchableRipple
        style={{ padding: 24 }}
        rippleColor="rgba(0, 0, 0, .05)"
        onPress={() => console.log('Pressed')}
      >
        <Row>
          <Row>
            <AntDesign
              name="apple1"
              size={20}
              color={theme.colors.onBackground}
            />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 12,
                fontFamily: 'semibold',
                color: theme.colors.onBackground,
              }}
            >
              Add to Apple wallet
            </Text>
          </Row>

          <AntDesign name="right" size={18} color={theme.colors.onBackground} />
        </Row>
      </TouchableRipple>

      <CardArrivingContainer>
        <Image
          resizeMode="contain"
          style={{ width: 48, height: 48 }}
          source={require('../../assets/plane.png')}
        />

        <Column style={{ marginLeft: 12 }}>
          <Text style={{ fontFamily: 'regular' }}>
            Card arriving by Monday, April 22
          </Text>

          <Text
            style={{
              marginTop: 6,
              fontFamily: 'semibold',
              textDecorationLine: 'underline',
              color: theme.colors.onPrimaryContainer,
            }}
          >
            More info
          </Text>
        </Column>
      </CardArrivingContainer>

      <ManageCardContainer>
        <ManageCardTitleWrapper>
          <Text style={{ fontFamily: 'regular' }}>Manage card</Text>
        </ManageCardTitleWrapper>

        {manageCardOptions.map((option: any, index) => (
          <TouchableRipple
            key={`manage-card-option-${index}`}
            style={{ paddingHorizontal: 24, paddingVertical: 16 }}
            rippleColor="rgba(0, 0, 0, .05)"
            onPress={() => console.log('Pressed')}
          >
            <Row>
              <Row>
                <ManageCardOptionIcon>
                  <AntDesign name={option.icon} size={24} color="black" />
                </ManageCardOptionIcon>

                <Text
                  style={{
                    fontFamily: 'semibold',
                    fontSize: 16,
                    marginLeft: 16,
                  }}
                >
                  {option.label}
                </Text>
              </Row>

              <AntDesign
                name="right"
                size={18}
                color={theme.colors.onBackground}
              />
            </Row>
          </TouchableRipple>
        ))}
      </ManageCardContainer>
    </Container>
  )
}
