import React from "react";
import { TextInput,View,StyleSheet,Button,Text } from "react-native";

const Login = ({navigation}) =>{
  // const [email,setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Login  </Text>
      <TextInput
      style={styles.input}
      placeholder="Enter your email"
      keyboardType="email-address"
      // value={email}
      // onChangeText={(text) => setEmail(text)}
      />

      <TextInput
      style={styles.input}
      placeholder="Enter your password"
      // secureTextEntry={true}
      // value={password}
      // onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={()=> navigation.navigate('HomeScreen')}
      // onPress={handleLogin}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    padding:20,
  }
})

export default Login;