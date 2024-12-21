import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import Signup from './screens/Signup';
import MenuScreen from './screens/MenuScreen'; // Add your MenuScreen for custom drawer content
import AnalysisScreen from './screens/AnalysisScreen';
import ProfileScreen from './screens/ProfileScreen';
import CardScreen from './screens/CardScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuScreen {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#1c1b29',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
        <Stack.Screen name="AnalysisScreen" component={AnalysisScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
