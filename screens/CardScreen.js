import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CardScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default CardScreen