import React from 'react'
import {
  useTheme,
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper'
import { Icon, IconNames } from './Icon'

type FontFamily = 'regular' | 'medium' | 'semibold' | 'bold' | 'extra' | 'black'

interface ButtonProps extends PaperButtonProps {
  size?: 'small' | 'medium' | 'large'
  fontSize?: number
  fontFamily?: FontFamily
  iconName?: IconNames
  iconSize?: number
  iconColor?: string
  rounded?: boolean
}

const heights = {
  small: 38,
  medium: 50,
  large: 60,
}

const Button: React.FC<ButtonProps> = ({
  size,
  children,
  compact,
  mode = 'contained',
  onPress,
  style,
  textColor,
  buttonColor,
  iconName,
  iconColor,
  iconSize,
  fontSize,
  fontFamily,
  rounded,
  ...rest
}) => {
  const theme = useTheme()

  const renderIcon = () => {
    if (iconName) {
      return (
        <Icon
          name={iconName}
          size={iconSize || 18}
          color={iconColor || theme.colors.onSurfaceVariant}
        />
      )
    } else {
      return null
    }
  }

  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      icon={renderIcon}
      textColor={textColor || theme.colors.onPrimary}
      labelStyle={{
        fontSize: fontSize || 16,
        fontFamily: fontFamily || 'semibold',
      }}
      buttonColor={buttonColor || theme.colors.primary}
      contentStyle={{
        height: size ? heights[size] : heights['medium'],
      }}
      style={[style, rounded && { borderRadius: 100 }]}
      {...rest}
    >
      {children}
    </PaperButton>
  )
}

export default Button
