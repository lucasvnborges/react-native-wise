import React, { Fragment, useRef, useState } from 'react'
import styled from 'styled-components/native'
import PagerView from 'react-native-pager-view'
import { NavigationProp } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, {
  useHandler,
  useEvent,
  runOnJS,
} from 'react-native-reanimated'
import { Image } from 'react-native'
import { ProgressBar, Text, useTheme } from 'react-native-paper'
import { AuthStackParamList } from '../../navigation'
import { Button } from '../../components'

const AnimatedPager = Animated.createAnimatedComponent(PagerView)

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const ProgressContainer = styled.View`
  padding: 24px;
`

const Content = styled.View`
  flex: 3;
`

const ImageContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: flex-end;
`

const TextContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`

const StyledText = styled(Text)`
  font-size: 38px;
  line-height: 36px;
  text-align: center;
  font-family: 'black';
  padding-vertical: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.onBackground};
`

const ButtonContainer = styled.View`
  flex: 1;
  padding: 0 24px;
  justify-content: center;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const GoogleSignInButton = styled(Button)`
  margin-top: 16px;
`

type Props = {
  navigation: NavigationProp<AuthStackParamList>
}

const steps = [
  {
    img: require('../../assets/jars.png'),
    description: '175 countries. 50 currencies. one account',
  },
  {
    img: require('../../assets/plane.png'),
    description: 'Send money and get paid from abroad',
  },
  {
    img: require('../../assets/graph.png'),
    description: "It's your money. Boost it with assets",
  },
  {
    img: require('../../assets/globe.png'),
    description: 'One account for all the money in the world',
  },
]

function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const subscribeForEvents = ['onPageScroll']
  const handler = useHandler(handlers, dependencies)

  return useEvent<any>(
    (event) => {
      'worklet'
      const { onPageScroll } = handlers

      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, handler.context)
      }
    },
    subscribeForEvents,
    handler.doDependenciesDiffer,
  )
}

export default function Initial({ navigation }: Props): React.JSX.Element {
  // hooks
  const theme = useTheme()
  // refs
  const animatedPagerRef = useRef<PagerView>(null)
  // state
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps] = useState(steps.length - 1)
  const [unityProgress] = useState(1 / totalSteps)

  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      'worklet'
      runOnJS(setCurrentStep)(e.position)
    },
  })

  return (
    <Container>
      <ProgressContainer>
        <ProgressBar
          progress={unityProgress * currentStep}
          style={{ height: 6, borderRadius: 8 }}
          color={theme.colors.onPrimaryContainer}
        />
      </ProgressContainer>

      <AnimatedPager
        style={{ flex: 3 }}
        ref={animatedPagerRef}
        onPageScroll={handler}
        initialPage={currentStep}
        orientation="horizontal"
        testID="initialScreenPagerView"
      >
        {steps.map((step) => (
          <Content key={step.description}>
            <ImageContainer>
              <Image
                source={step.img}
                resizeMode="contain"
                style={{ width: '90%', height: '90%' }}
              />
            </ImageContainer>

            <TextContainer>
              <StyledText variant="bodyMedium">{step.description}</StyledText>
            </TextContainer>
          </Content>
        ))}
      </AnimatedPager>

      <ButtonContainer>
        {currentStep === totalSteps ? (
          <Fragment>
            <Row>
              <Button
                rounded
                size="large"
                fontSize={18}
                fontFamily="bold"
                style={{ width: '47.5%' }}
                textColor={theme.colors.onPrimaryContainer}
                buttonColor={theme.colors.primaryContainer}
                onPress={() => navigation.navigate('LoginScreen')}
              >
                Log in
              </Button>
              <Button
                rounded
                size="large"
                fontSize={18}
                fontFamily="bold"
                style={{ width: '47.5%' }}
                textColor={theme.colors.onPrimaryContainer}
                buttonColor={theme.colors.primaryContainer}
                onPress={() => navigation.navigate('RegisterScreen')}
              >
                Register
              </Button>
            </Row>

            <GoogleSignInButton
              rounded
              fontSize={18}
              mode="outlined"
              fontFamily="bold"
              iconName="google"
              onPress={console.log}
              textColor={theme.colors.onBackground}
              buttonColor={theme.colors.background}
            >
              Sign in with Google
            </GoogleSignInButton>
          </Fragment>
        ) : (
          <Button
            rounded
            size="large"
            fontSize={18}
            fontFamily="bold"
            textColor={theme.colors.onPrimaryContainer}
            buttonColor={theme.colors.primaryContainer}
            onPress={() => animatedPagerRef.current?.setPage(totalSteps)}
          >
            Get started
          </Button>
        )}
      </ButtonContainer>
    </Container>
  )
}
