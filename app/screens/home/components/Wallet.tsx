import React from 'react';
import styled from 'styled-components/native';
import { Avatar, Text, useTheme } from 'react-native-paper';

const ListItemContainer = styled.View`
  width: 280px;
  height: 208px;
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between;
  margin-right: ${({ isLast }) => (isLast ? '0' : '24px')};
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
`;

const AvatarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BalanceText = styled.Text`
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.onBackground};
`;

const WalletCard = ({ item, index, isLast }) => {
  const theme = useTheme();

  return (
    <ListItemContainer isLast={isLast}>
      <AvatarContainer>
        <Avatar.Image size={52} style={{ marginRight: 12 }} source={item.uri} />
        <Text style={{ fontSize: 22, fontFamily: theme.fonts.semibold, color: theme.colors.onBackground }}>
          {item.text}
        </Text>
      </AvatarContainer>
      <BalanceText>****</BalanceText>
    </ListItemContainer>
  );
};

export default WalletCard;