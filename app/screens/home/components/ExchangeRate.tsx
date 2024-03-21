import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { LineGraph } from 'react-native-graph'
import { SmallButton } from '../../../components/Paper'
import { SelectionDot } from './CustomSelectionDot'
import { generateRandomGraphData } from '../../../utils/generateRandomGraph'

const ExchangeRateContainer = styled.View`
  margin: 16px;
  padding: 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
`

const ExchangeRateInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ExchangeRateInfo = styled.View`
  flex: 1;
  height: 40px;
  justify-content: space-between;
`

const POINT_COUNT = 30
const POINTS = generateRandomGraphData(POINT_COUNT)

const ExchangeRate = () => {
  // hooks
  const theme = useTheme()
  // state
  const [points] = useState(POINTS)

  return (
    <ExchangeRateContainer>
      <ExchangeRateInfoWrapper>
        <ExchangeRateInfo>
          <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>
            1 AUD = 3.30 BRL
          </Text>
          <Text style={{ fontFamily: 'regular', fontSize: 16, marginTop: 4 }}>
            Today
          </Text>
        </ExchangeRateInfo>
        <SmallButton
          compact
          mode="contained"
          onPress={console.log}
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
      </ExchangeRateInfoWrapper>

      <View style={{ flex: 1 }}>
        <LineGraph
          style={{
            width: '100%',
            aspectRatio: 1.5,
            alignSelf: 'center',
            paddingVertical: 40,
          }}
          points={points}
          animated
          enableIndicator
          enablePanGesture
          indicatorPulsating
          lineThickness={3.5}
          horizontalPadding={20}
          SelectionDot={SelectionDot}
          color={theme.colors.onPrimaryContainer}
          // onGestureStart={() => hapticFeedback('impactLight')}
          // onPointSelected={(p) => updatePriceTitle(p)}
          // onGestureEnd={() => resetPriceTitle()}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: '#d5d6d7',
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: 'regular',
          }}
        >
          A month agora
        </Text>
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: 'regular',
          }}
        >
          Today
        </Text>
      </View>
    </ExchangeRateContainer>
  )
}

export default ExchangeRate
