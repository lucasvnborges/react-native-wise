import React from 'react';
import { View } from 'react-native';
import { useTheme, Avatar, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import { SmallButton } from '../../../components/Paper';
import { Icon } from '../../../components/Icon';

const HeaderContainer = styled.View`
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
`;

const EarnButton = styled(SmallButton)`
  margin-right: 8px;
`;

const Main = () => {
  const theme = useTheme();

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
          Earn $15
        </EarnButton>

        <IconButton
          size={24}
          mode="contained"
          testID="closeButton"
          iconColor={theme.colors.primary}
          onPress={() => auth.logOut()}
          icon={() => (
            <Icon
              box={16}
              size={20}
              name="eyeOff"
              color={theme.colors.onSurfaceVariant}
            />
          )}
        />
      </View>
    </HeaderContainer>
  );
};

export default Main;
