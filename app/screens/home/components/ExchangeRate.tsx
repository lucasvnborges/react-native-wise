import React from 'react'
import styled from 'styled-components/native'
import { Text, useTheme } from 'react-native-paper'
import { SmallButton } from '../../../components/Paper'

const ExchangeRateContainer = styled.View`
  margin: 16px;
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
`

const ExchangeRateInfo = styled.View`
  flex: 1;
  height: 40px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const ExchangeRate = () => {
  const theme = useTheme()

  return (
    <ExchangeRateContainer>
      <ExchangeRateInfo>
        <Text style={{ fontFamily: theme.fonts.semibold, fontSize: 20 }}>
          1 AUD = 3.30 BRL
        </Text>
        <Text style={{ fontFamily: theme.fonts.regular, fontSize: 16 }}>
          Today
        </Text>
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
    </ExchangeRateContainer>
  )
}

export default ExchangeRate
