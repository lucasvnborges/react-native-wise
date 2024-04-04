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

export default function Transactions() {
  return (
    <View>
      <Text>Transactions</Text>
    </View>
  )
}