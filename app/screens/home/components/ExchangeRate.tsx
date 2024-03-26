import React, { useEffect, useState } from 'react'
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
  const [exchangeRate, setExchangeRate] = useState(points[points.length - 1].value)

  useEffect(() => {
    console.log(points)
  }, [])
  
  return (
    <ExchangeRateContainer>
      <ExchangeRateInfoWrapper>
        <ExchangeRateInfo>
          <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>
            1 AUD = {exchangeRate} BRL
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

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <LineGraph
          style={{
            width: '84%',
            aspectRatio: 1.5,
            marginVertical: 24,
            alignSelf: 'center',
          }}
          animated
          points={points}
          enableIndicator
          enablePanGesture
          indicatorPulsating
          lineThickness={3.5}
          horizontalPadding={16}
          SelectionDot={SelectionDot}
          color={theme.colors.onPrimaryContainer}
          onPointSelected={(p) => setExchangeRate(p.value)}
          // onGestureEnd={() => resetPriceTitle()}
          // onGestureStart={() => hapticFeedback('impactLight')}
        />

        <View
          style={{
            padding: 16,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              fontFamily: 'regular',
              color: theme.colors.elevation.level2,
            }}
          >
            3.50
          </Text>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              fontFamily: 'regular',
              color: theme.colors.elevation.level2,
            }}
          >
            3.25
          </Text>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              fontFamily: 'regular',
              color: theme.colors.elevation.level2,
            }}
          >
            3.00
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: theme.colors.elevation.level1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: 'regular',
          }}
        >
          A month ago
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
