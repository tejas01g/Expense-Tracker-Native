import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './HomeScreen';
import AnalysisScreen from './AnalysisScreen';
import ProfileScreen from './ProfileScreen';
import CardScreen from './CardScreen'; // Assuming you have a Cards screen

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator

      screenOptions={({  route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Analysis') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } 
           else if (route.name === 'Cards') {
            iconName = focused ? 'card' : 'card-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e67e22', // Active icon color
        tabBarInactiveTintColor: '#fff', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#29293d', // Bottom tab bar background color
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analysis" component={AnalysisScreen} />
      <Tab.Screen name="Cards" component={CardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainContainer;
