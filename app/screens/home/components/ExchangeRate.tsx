import React from 'react'
import styled from 'styled-components/native'
import { Text, useTheme } from 'react-native-paper'
import { SmallButton } from '../../../components/Paper'
import { View } from 'react-native'

const ExchangeRateContainer = styled.View`
  margin: 16px;
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
`

const ExchangeRateInfo = styled.View`
  flex: 1;
  height: 40px;
  justify-content: space-between;
`

const ExchangeRate = () => {
  const theme = useTheme()

  return (
    <ExchangeRateContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ExchangeRateInfo>
          <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>
            1 AUD = 3.30 BRL
          </Text>
          <Text style={{ fontFamily: 'regular', fontSize: 16 }}>Today</Text>
        </ExchangeRateInfo>
        <SmallButton
          compact
          mode="contained"
          onPress={console.log}
          style={{ marginRight: 12 }}
          textColor={theme.colors.onPrimaryContainer}
          buttonColor={theme.colors.primaryContainer}
        >
          <Text
            style={{
              height: 21,
              fontSize: 16,
              alignSelf: 'center',
              fontFamily: 'semibold',
            }}
          >
            Edit
          </Text>
        </SmallButton>
      </View>

      <View style={{ flex: 1 }}></View>
    </ExchangeRateContainer>
  )
}

export default ExchangeRate
