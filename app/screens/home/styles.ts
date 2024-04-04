import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  height: 60px;
  padding-horizontal: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const BalanceContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 16px;
`

export const BalanceText = styled.Text`
  font-size: 16px;
  font-family: regular;
`

export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  margin-vertical: 16px;
  padding-horizontal: 16px;
`

export const ExchangeRateContainer = styled.View`
  padding-top: 50px;
  padding-bottom: 6px;
  padding-horizontal: 16px;
`

export const ExchangeRateText = styled.Text`
  font-size: 26px;
  font-family: semibold;
`
