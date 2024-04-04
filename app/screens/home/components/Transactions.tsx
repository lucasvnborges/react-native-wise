import React from 'react'
import { View, Text } from 'react-native'

const data = [
  {
    sender: 'Lucas Borges',
    type: 'Paid',
    date: '2024-04-03',
    value: 50
  }
]

type RenderItemProps = {
  item: any;
}

export default function Transactions() {
  
  const renderItem = ({ item }: RenderItemProps) => {

  }

  return (
    <View>
      <Text>Transactions</Text>
    </View>
  )
}
