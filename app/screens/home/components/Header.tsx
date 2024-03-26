import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { useTheme, Avatar, IconButton, Text } from 'react-native-paper'
import { SmallButton } from '../../../components/Paper'
import Icon from '../../../components/Icon'
import { useAuth } from '@realm/react'

const HeaderContainer = styled.View`
  height: 60px;
  padding-horizontal: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 4px; */
  background-color: ${({ theme }) => theme.colors.background};
`

const EarnButton = styled(SmallButton)`
  margin-right: 8px;
`

const Header: React.FC<any> = ({ balanceIsVisible, handlePressEye }) => {
  // hooks
  const auth = useAuth()
  const theme = useTheme()

  return (
    <HeaderContainer>
      <Avatar.Image
        size={44}
        style={{ marginLeft: 2 }}
        source={{
          uri: 'https://www.itaipu.gov.br/sites/default/files/af_df/20171018NR0689.JPG',
        }}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <EarnButton
          compact
          mode="contained"
          onPress={console.log}
          textColor={theme.colors.onPrimaryContainer}
          buttonColor={theme.colors.primaryContainer}
        >
          <Text
            style={{
              height: 22,
              fontSize: 14,
              alignSelf: 'center',
              fontFamily: 'semibold',
            }}
          >
            Earn $15
          </Text>
        </EarnButton>

        <IconButton
          size={24}
          mode="contained"
          testID="closeButton"
          iconColor={theme.colors.primary}
          onPress={() => handlePressEye(!balanceIsVisible)}
          icon={() => (
            <Icon
              box={16}
              size={20}
              color={theme.colors.onSurfaceVariant}
              name={balanceIsVisible ? "eyeOn" : "eyeOff"}
            />
          )}
        />
      </View>
    </HeaderContainer>
  )
}

export default Header
