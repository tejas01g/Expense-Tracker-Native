// import React from "react";
// import { TextInput,View,StyleSheet,Button,Text } from "react-native";

// const Login = ({navigation}) =>{
//   // const [email,setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const handleLogin = () =>{
//     navigation.navigate('Home');
//   }

//   return(
//     <View style={styles.container}>
//       <Text style={styles.title}> Login  </Text>
//       <TextInput
//       style={styles.input}
//       placeholder="Enter your email"
//       keyboardType="email-address"
//       // value={email}
//       // onChangeText={(text) => setEmail(text)}
//       />

//       <TextInput
//       style={styles.input}
//       placeholder="Enter your password"
//       // secureTextEntry={true}
//       // value={password}
//       // onChangeText={(text) => setPassword(text)}
//       />
//       <Button title="Login" onPress={handleLogin} 
//       // onPress={handleLogin}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     padding:20,
//   }
// })

// export default Login;



import React from "react";
import { TextInput, View, StyleSheet, Button, Text } from "react-native";

const Login = ({ navigation }) => {

  const handleLogin = () => {
    // For now, we directly navigate to the Home screen on button press
    navigation.navigate('MainContainer');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default Login;
