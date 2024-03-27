import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useTheme } from 'react-native-paper'
import { Button } from '../../../components'
import Icon from '../../../components/Icon'

const data = [
  {
    key: 'send',
    label: 'Send',
    iconName: 'arrowUp',
    onPress: () => console.log('Send pressed'),
    buttonColor: 'primaryContainer',
    textColor: 'onPrimaryContainer',
  },
  {
    key: 'addMoney',
    label: 'Add money',
    iconName: 'plus',
    onPress: () => console.log('Add money pressed'),
    buttonColor: 'surfaceVariant',
    textColor: 'onSurfaceVariant',
  },
  {
    key: 'request',
    label: 'Request',
    iconName: 'arrowDown',
    onPress: () => console.log('Request pressed'),
    buttonColor: 'surfaceVariant',
    textColor: 'onSurfaceVariant',
  },
]

const Actions = () => {
  const theme: any = useTheme()

  const renderItem = ({ item }) => (
    <Button
      compact
      size="small"
      mode="contained"
      onPress={item.onPress}
      style={{ marginRight: 12 }}
      textColor={theme.colors[item.textColor]}
      buttonColor={theme.colors[item.buttonColor]}
      icon={() => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Icon
            size={18}
            name={item.iconName}
            color={theme.colors[item.textColor]}
          />
        </View>
      )}
    >
      <Text
        style={{
          height: 21,
          fontSize: 16,
          alignSelf: 'center',
          fontFamily: 'semibold',
        }}
      >
        {item.label}
      </Text>
    </Button>
  )

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 16 }}
    />
  )
}

export default Actions
