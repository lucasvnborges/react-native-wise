import styled from 'styled-components/native'
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper'
import { TextInput as PaperTextInput } from 'react-native-paper'

export const LargeButton = styled(PaperButton).attrs({
  labelStyle: {
    fontSize: 16,
    fontFamily: 'bold',
  },
  contentStyle: {
    height: 54,
  },
})`
  border-radius: 100px;
`

interface ButtonProps extends Partial<PaperButtonProps> {
  underline?: boolean
}

export const Button = styled(PaperButton).attrs((props: ButtonProps) => ({
  labelStyle: {
    fontSize: 16,
    fontFamily: 'bold',
    textDecorationLine: props.underline ? 'underline' : 'none',
  },
  contentStyle: {
    height: 46,
  },
}))`
  border-radius: 100px;
`

export const SmallButton = styled(PaperButton).attrs({
  labelStyle: {
    fontSize: 12,
    fontFamily: 'semibold',
    margin: 0,
    padding: 0,
  },
  contentStyle: {
    height: 38,
    paddingVertical: 0,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
})`
  border-radius: 100px;
`

export const TextInput = styled(PaperTextInput).attrs({
  labelStyle: {
    fontSize: 16,
    fontFamily: 'bold',
  },
  contentStyle: {
    height: 46,
  },
})`
  border-radius: 100px;
`
