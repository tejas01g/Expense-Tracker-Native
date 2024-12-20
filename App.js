// import { NavigationContainer } from "@react-navigation/native";
// import React from "react";
// import {createStackNavigator} from '@react-navigation/stack';

// import Welcome from "./screens/welcome";

// const stack = createStackNavigator();

// const App= () =>{
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName= "Welcome" screenOptions={{ headerShown: false}}>
//         <Stack.Screen name="Welcome" component={Welcome} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
