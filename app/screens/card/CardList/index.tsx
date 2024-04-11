import styled from 'styled-components/native'
import React, { useRef, useState } from 'react'
import { FlatList, Image, Dimensions } from 'react-native'
import { Text } from 'react-native-paper'

const { width } = Dimensions.get('window')

const cards = [
  {
    id: '0x1',
    img: require('../../../assets/cards/maincard.png'),
    number: '1234',
    available: '450',
  },
  {
    id: '0x2',
    img: require('../../../assets/cards/maincard.png'),
    number: '5678',
    available: '705',
  },
]

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default function CardList({ onChangeCard }: any) {
  const [focusedCard, setFocusedCard] = useState(cards[0].number)

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: width - 64,
  }

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    try {
      if (viewableItems.length > 0) {
        setFocusedCard(viewableItems[0].item.number)
        onChangeCard(viewableItems[0].item.available)
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }).current

  const renderItem = ({ item }: any) => (
    <Image
      source={item.img}
      resizeMode="contain"
      style={{ width: width - 64, height: 200, margin: 4 }}
    />
  )

  return (
    <Container>
      <FlatList
        horizontal
        data={cards}
        pagingEnabled
        decelerationRate="fast"
        renderItem={renderItem}
        snapToInterval={width - 64}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={handleViewableItemsChanged}
      />

      <Text
        style={{ fontFamily: 'semibold', fontSize: 16, paddingVertical: 24 }}
      >
        Virtual card •••• {focusedCard}
      </Text>
    </Container>
  )
}
