import { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BlueView } from './BlueView'
import { RedView } from './RedView'
import TargetPositionProvider from './context/position'

export default function App() {
  return (
    <TargetPositionProvider>
      <View style={styles.container}>
        <View style={[styles.column, { zIndex: 1000 }]}>
          <View style={{ flex: 1 }}>
            <View style={styles.blueViewParent}>
              <View>
                <View>
                  <View>
                    <View>
                      <BlueView />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.column]}></View>

        <View style={[styles.column]}>
          <View>
            <View>
              <View>
                <RedView />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TargetPositionProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  column: {
    flex: 1
  },
  blueViewParent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 24
  }
})
