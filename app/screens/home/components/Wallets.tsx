import React from 'react'
import { FlatList } from 'react-native'
import WalletCard from './WalletCard'

type Props = {
  data: any
  balanceIsVisible: any
}

type RenderItemProps = {
  item: any
  index: number
}

export default function Wallets({ data, balanceIsVisible }: Props) {
  const renderItem = ({ item, index }: RenderItemProps) => {
    return (
      <WalletCard
        item={item}
        isLast={index + 1 === data.length}
        balanceIsVisible={balanceIsVisible}
      />
    )
  }

  return (
    <FlatList
      horizontal
      data={data}
      pagingEnabled
      snapToInterval={304}
      decelerationRate="fast"
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  )
}
