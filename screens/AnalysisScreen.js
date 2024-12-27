import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AnalysisScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AnalysisScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: '#1e1e2f'
  },
  title: {
    fontSize: 24,
  },
})

export default AnalysisScreen