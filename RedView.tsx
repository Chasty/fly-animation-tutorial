import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useTargetPosition } from './context/position'

export const RedView = () => {
  const redViewRef = useRef<View>()
  const [redPosition, setRedPosition] = useTargetPosition()

  return (
    <View
      ref={redViewRef}
      style={styles.container}
      onLayout={(event) => {
        redViewRef.current?.measure((x, y, width, height, pageX, pageY) => {
          console.log({ red: 'red', layout: { pageX, pageY } })
          setRedPosition({
            x: pageX,
            y: pageY
          })
        })
      }}
    ></View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 100
  }
})
