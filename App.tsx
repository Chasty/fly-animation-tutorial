import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, withDelay, withSpring, withTiming } from 'react-native-reanimated'

const calculateTranslation = (origin: Coordinate, target: Coordinate) => {
  const translateX = target.x - origin.x
  const translateY = target.y - origin.y

  return {
    translateX,
    translateY
  }
}

type Coordinate = {
  x: number
  y: number
}

export default function App() {
  const [redPosition, setRedPosition] = useState<Coordinate>({ x: 0, y: 0 })
  const [bluePosition, setBluePosition] = useState<Coordinate>({ x: 0, y: 0 })

  const { translateX, translateY } = calculateTranslation(bluePosition, redPosition)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(translateX)
        },
        {
          translateY: withSpring(translateY)
        }
      ]
    }
  })

  return (
    <View style={styles.container}>
      <View
        style={styles.redBox}
        onLayout={(event) => {
          setRedPosition({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y
          })
        }}
      ></View>

      <Animated.View
        style={[styles.blueBox, animatedStyle]}
        onLayout={(event) => {
          setBluePosition({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y
          })
        }}
      ></Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginLeft: 200
  },
  blueBox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
    marginRight: 200
  }
})
