import React, { Fragment } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  stats: {
    message: undefined | string
    open: string
    high: string
    low: string
    volume: string
    last: string
    volume_30day: string
  }
}

export const CardDetails: React.FC<Props> = ({ stats }) => {
  return (
    <View style={styles.container}>
      {stats.message ? (
        <Text style={styles.message}> Currently not availbe. Stay tuned. </Text>
      ) : (
        <Fragment>
          <Text>Open: {stats.open} </Text>
          <Text>High: {stats.high} </Text>
          <Text>Low: {stats.low} </Text>
          <Text>Last: {stats.last} </Text>
          <Text>Volume: {stats.volume} </Text>
          <Text>Volume 30 Day: {stats.volume_30day} </Text>
        </Fragment>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '2%',
    marginLeft: '2%',
    fontSize: 18,
  },
  message: {
    fontWeight: 'bold',
  },
})
