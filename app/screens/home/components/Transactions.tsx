import React from 'react'
import { View, Text, FlatList } from 'react-native'

const data = [
  {
    id: 1,
    sender: 'Lucas Borges',
    type: 'Paid',
    date: '2024-04-03',
    value: 50,
  },
]

type RenderItemProps = {
  item: any
}

export default function Transactions() {
  const renderItem = ({ item }: RenderItemProps) => {}

  return (
    <View>
      <Text>Transactions</Text>

      <FlatList
        data={data}
        decelerationRate="fast"
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
