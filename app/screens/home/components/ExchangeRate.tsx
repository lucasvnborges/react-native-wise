import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { SmallButton } from '../../../components/Paper'
import { LineGraph } from 'react-native-graph'
import gaussian from 'gaussian'
import { SelectionDot } from './CustomSelectionDot'

function weightedRandom(mean: number, variance: number): number {
  var distribution = gaussian(mean, variance)
  // Take a random sample using inverse transform sampling method.
  return distribution.ppf(Math.random())
}

export function generateRandomGraphData(length: number): any {
  return Array<number>(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(
        new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index,
      ),
      value: (Math.random() * 0.5 + 3).toFixed(5),
    }))
}

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
  const theme = useTheme()
  const [points, setPoints] = useState([
    { date: new Date('2000-01-01T02:00:00.000Z'), value: '3.35269' },
    { date: new Date('2000-01-02T02:00:00.000Z'), value: '3.34269' },
    { date: new Date('2000-01-03T02:00:00.000Z'), value: '3.32412' },
    { date: new Date('2000-01-04T02:00:00.000Z'), value: '3.34329' },
    { date: new Date('2000-01-05T02:00:00.000Z'), value: '3.37689' },
    { date: new Date('2000-01-06T02:00:00.000Z'), value: '3.40464' },
    { date: new Date('2000-01-07T02:00:00.000Z'), value: '3.40423' },
    { date: new Date('2000-01-08T02:00:00.000Z'), value: '3.40449' },
    { date: new Date('2000-01-08T02:00:00.000Z'), value: '3.40449' },
    // { date: new Date('2000-01-09T02:00:00.000Z'), value: '3.34981' },
    { date: new Date('2000-01-10T02:00:00.000Z'), value: '3.38713' },
    { date: new Date('2000-01-11T02:00:00.000Z'), value: '3.37152' },
    { date: new Date('2000-01-12T02:00:00.000Z'), value: '3.37056' },
    { date: new Date('2000-01-13T02:00:00.000Z'), value: '3.36831' },
    { date: new Date('2000-01-14T02:00:00.000Z'), value: '3.38298' },
    { date: new Date('2000-01-15T02:00:00.000Z'), value: '3.38910' },
    { date: new Date('2000-01-16T02:00:00.000Z'), value: '3.40012' },
    { date: new Date('2000-01-17T02:00:00.000Z'), value: '3.44238' },
    { date: new Date('2000-01-18T02:00:00.000Z'), value: '3.47813' },
    { date: new Date('2000-01-19T02:00:00.000Z'), value: '3.44838' },
    { date: new Date('2000-01-20T02:00:00.000Z'), value: '3.45139' },
    { date: new Date('2000-01-21T02:00:00.000Z'), value: '3.43322' },
    { date: new Date('2000-01-22T02:00:00.000Z'), value: '3.44543' },
    { date: new Date('2000-01-23T02:00:00.000Z'), value: '3.43385' },
    { date: new Date('2000-01-24T02:00:00.000Z'), value: '3.44554' },
    { date: new Date('2000-01-25T02:00:00.000Z'), value: '3.43828' },
    { date: new Date('2000-01-26T02:00:00.000Z'), value: '3.43972' },
    { date: new Date('2000-01-27T02:00:00.000Z'), value: '3.43908' },
    { date: new Date('2000-01-28T02:00:00.000Z'), value: '3.43346' },
    { date: new Date('2000-01-29T02:00:00.000Z'), value: '3.47088' },
    { date: new Date('2000-01-30T02:00:00.000Z'), value: '3.42463' },
  ])

  useEffect(() => console.log(JSON.stringify(points)), [])

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
