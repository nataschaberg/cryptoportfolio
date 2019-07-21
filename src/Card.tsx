import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  stats: object
}

export const CardDetails: React.FC<Props> = ({ stats }) => {
  return (
    <View>
      <Text> {JSON.stringify(stats)} </Text>
    </View>
  )
}
