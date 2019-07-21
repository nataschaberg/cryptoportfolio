/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Overview } from './src/Overview'

const App = () => {
  return (
    <Fragment>
      <View style={styles.parentContainer}>
        <View style={styles.innerContainer}>
          <Overview />
        </View>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginVertical: '2%',
    width: '100%',
    backgroundColor: 'yellow',
  },
})

export default App
