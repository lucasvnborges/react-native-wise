import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, BottomNavigation, useTheme } from 'react-native-paper'
import Svg, { Path } from 'react-native-svg'
import HomeScreen from '../screens/home'

const Home = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill={props.color}
      d="M22.97 13.287L12.515 2.829a.829.829 0 00-1.2 0L.857 13.287l1.2 1.2L4.2 12.344v8.228a.86.86 0 00.857.857h13.715a.86.86 0 00.857-.857v-8.228l2.142 2.143 1.2-1.2zm-5.056 6.428h-12V10.63l6-6 6 6v9.085z"
    />
  </Svg>
)

const Send = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.409 8.21978L14.9393 8.75011L16 7.68945L15.4697 7.15912L8.53021 0.219669C8.23732 -0.0732237 7.76245 -0.0732236 7.46955 0.21967L0.530101 7.15912L-0.000229218 7.68945L1.06043 8.75011L1.59076 8.21978L7.24988 2.56066L7.24988 19.75L8.74988 19.75L8.74988 2.56066L14.409 8.21978Z" fill="#f6a"/>
</svg>
`

const Card = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 5H2V12.601l.27.225c1.042.868 1.123 1.56 1.023 2.012-.119.537-.554 1.018-.959 1.288L2 16.349V20h20.5V5H2.75zm.75 1.502V6.5H21v12H3.5v-1.376c.52-.433 1.068-1.104 1.257-1.962.233-1.053-.114-2.187-1.257-3.25V6.501zM16.25 16h2.5v-1.5h-2.5V16z"
      fill={props.color}
    />
  </Svg>
)

const Recipients = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill={props.color}
      d="M17.186 12.3a5.114 5.114 0 002.1-4.157C19.286 5.314 16.97 3 14.143 3a5.168 5.168 0 00-4.457 2.571c-2.743.086-4.972 2.358-4.972 5.143 0 1.715.815 3.215 2.1 4.157A6.796 6.796 0 003 21h1.714c0-2.014 1.2-3.771 2.872-4.629.643-.3 1.328-.514 2.1-.514h.171C12.686 15.857 15 18.171 15 21h1.714c0-2.7-1.543-5.014-3.814-6.129a5.61 5.61 0 001.414-1.585c2.743.085 4.972 2.357 4.972 5.143H21c0-2.7-1.543-5.015-3.814-6.129zm-8.272 1.714C7.5 13.586 6.43 12.3 6.43 10.714c0-1.628 1.114-2.957 2.614-3.343.257-.042.514-.085.814-.085.343 0 .643.043.943.128 1.457.429 2.486 1.715 2.486 3.3 0 .257-.043.472-.086.729-.343 1.543-1.714 2.7-3.343 2.7-.343 0-.643-.043-.943-.129h-.001zm6.043-2.528c.043-.257.043-.515.043-.772 0-2.228-1.414-4.114-3.429-4.843a3.377 3.377 0 012.572-1.157 3.439 3.439 0 013.428 3.429c0 1.628-1.114 2.957-2.614 3.343z"
    />
  </Svg>
)

const Manage = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={props.color}
      d="M4.286 11.144h6a.86.86 0 00.857-.857v-6a.86.86 0 00-.857-.857h-6a.86.86 0 00-.857.857v6a.86.86 0 00.857.857zM9.43 9.43H5.143V5.144H9.43V9.43zm4.285 1.714h6a.86.86 0 00.858-.857v-6a.86.86 0 00-.857-.857h-6a.86.86 0 00-.858.857v6a.86.86 0 00.857.857zm5.143-1.714h-4.285V5.144h4.285V9.43zm-8.57 11.142h-6a.86.86 0 01-.858-.857v-6a.86.86 0 01.857-.858h6a.86.86 0 01.857.858v6a.86.86 0 01-.857.857zm-5.144-1.715H9.43v-4.285H5.143v4.285zm8.572 1.715h6a.86.86 0 00.857-.857v-6a.86.86 0 00-.857-.858h-6a.86.86 0 00-.858.858v6a.86.86 0 00.858.857zm5.142-1.715h-4.285v-4.285h4.285v4.285z"
    />
  </Svg>
)

const Tab = createBottomTabNavigator()

export default function AppSync() {
  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          renderLabel={(props: {
            route: any
            focused: boolean
            color: string
          }) => (
            <Text
              style={{
                fontSize: 13,
                marginTop: 1,
                textAlign: 'center',
                fontFamily: 'semibold',
                color: props.focused ? theme.colors.onPrimaryContainer : theme.colors.onBackground,
              }}
            >
              {props.route.name}
            </Text>
          )}
          style={{
            height: 100,
            backgroundColor: theme.colors.background,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 6,
          }}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            if (options.tabBarIcon) {
              return options.tabBarIcon({
                focused,
                size: 30,
                color: focused ? color : theme.colors.onBackground,
              })
            }

            return null
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key]
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title

            return label
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Home height={size} width={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={SettingsScreen}
        options={{
          // tabBarLabel: 'Card',
          tabBarIcon: ({ color, size }) => {
            return <Card height={size} width={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Recipients"
        component={SettingsScreen}
        options={{
          // tabBarLabel: 'Recipients',
          tabBarIcon: ({ color, size }) => {
            return <Recipients height={size} width={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Manage"
        component={SettingsScreen}
        options={{
          // tabBarLabel: 'Manage',
          tabBarIcon: ({ color, size }) => {
            return <Manage height={size} width={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
