import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, useTheme } from 'react-native-paper'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export function Loading() {
  const theme = useTheme()

  return (
    <Container>
      <ActivityIndicator
        animating
        size="large"
        color={theme.colors.onPrimaryContainer}
      />
    </Container>
  )
}
