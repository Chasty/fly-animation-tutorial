import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { useTargetPosition } from './context/position'

type Coordinate = {
  x: number
  y: number
}

const calculateTranslation = (origin: Coordinate, target: Coordinate) => {
  const translateX = target.x - origin.x
  const translateY = target.y - origin.y

  return {
    translateX,
    translateY
  }
}

export const BlueView = () => {
  const blueViewRef = useRef<View>()
  const [bluePosition, setBluePosition] = useState<Coordinate>({ x: 0, y: 0 })
  const [targetPosition] = useTargetPosition()
  const { translateX, translateY } = calculateTranslation(bluePosition, targetPosition)

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
    <Animated.View
      ref={blueViewRef}
      style={[styles.container, animatedStyle]}
      onLayout={(event) => {
        blueViewRef.current?.measure((x, y, width, height, pageX, pageY) => {
          console.log({ blue: 'blue', layout: { pageX, pageY } })
          setBluePosition({
            x: pageX,
            y: pageY
          })
        })
      }}
    ></Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue'
  }
})
