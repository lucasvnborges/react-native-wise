import React from 'react'
import {
  useTheme,
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper'
import Icon, { IconNames } from './Icon'

type FontFamily = 'regular' | 'medium' | 'semibold' | 'bold' | 'extra' | 'black'

interface ButtonProps extends PaperButtonProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  fontSize?: number
  fontFamily?: FontFamily
  iconName?: IconNames
  iconSize?: number
  iconColor?: string
  rounded?: boolean
  underline?: boolean
}

const heights = {
  xsmall: 32,
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
  iconSize = 18,
  fontSize = 16,
  fontFamily = 'semibold',
  rounded,
  underline,
  ...rest
}) => {
  const theme = useTheme()

  const renderIcon = () => {
    if (iconName) {
      return (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor || theme.colors.onSurfaceVariant}
        />
      )
    } else {
      return null
    }
  }

  return (
    <PaperButton
      onPress={onPress}
      icon={renderIcon}
      mode={underline ? 'text' : mode}
      textColor={textColor || theme.colors.onPrimary}
      rippleColor={underline ? 'transparent' : theme.colors.elevation.level1}
      labelStyle={{
        fontSize: fontSize,
        fontFamily: fontFamily,
        textDecorationLine: underline ? 'underline' : 'none',
      }}
      buttonColor={
        underline
          ? theme.colors.background
          : buttonColor || theme.colors.primary
      }
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
