import { IconButton } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const AvailableBalance = styled.View`
  height: 120px;
  align-items: center;
  justify-content: center;
`

export const ActionsContainer = styled.View`
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
`

export const ActionWrapper = styled.View`
  align-items: center;
`

export const ActionButton = styled(IconButton)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Column = styled.View`
  flex-direction: column;
`

export const CardArrivingContainer = styled.View`
  margin: 24px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.surface};
`

export const ManageCardContainer = styled.View``

export const ManageCardTitleWrapper = styled.View`
  padding-vertical: 6px;
  margin-vertical: 12px;
  margin-horizontal: 24px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({theme}) => theme.colors.surface};
`

export const ManageCardOptionIcon = styled.View`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surface};
`
