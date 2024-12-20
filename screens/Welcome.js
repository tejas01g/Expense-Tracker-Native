import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Expense Tracker!</Text>
      {/* <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} /> */}

      <Button title= "Get Started" onPress={()=> navigation.navigate('Login')} ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whiteoff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Welcome;
