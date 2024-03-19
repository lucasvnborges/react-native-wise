import { useEvent, useHandler } from "react-native-reanimated"

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
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
