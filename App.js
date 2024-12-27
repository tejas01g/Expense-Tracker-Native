import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack navigator
import MainContainer from './screens/MainContainer'; // Import the MainContainer

// Import your authentication screens
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator(); // Initialize Stack navigator

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You can use useEffect to simulate user login or replace this with your actual login logic
  useEffect(() => {
    // Simulate login status change (you can replace it with actual logic)
    setIsLoggedIn(false); // Change this to true to simulate logged-in status
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainContainer /> // Use MainContainer for the bottom navigation bar
      ) : (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="MainContainer" component={MainContainer}/>

          
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;



// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MainContainer from './screens/MainContainer'; // Import the MainContainer

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Simulate user login status or replace with your authentication logic
//   useEffect(() => {
//     setIsLoggedIn(true); // Change this to true to simulate logged-in status
//   }, []);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <MainContainer /> // Show the MainContainer (bottom navigation bar) if logged in
//       ) : (
//         // Optionally, you could handle a different screen here if needed
//         <MainContainer /> // Placeholder for when the user is not logged in
//       )}
//     </NavigationContainer>
//   );
// };

// export default App;


// // import React, { useState, useEffect } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import MainContainer from './screens/MainContainer'; // Import the MainContainer

// // const App = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   // Simulate user login status or replace with your authentication logic
// //   useEffect(() => {
// //     setIsLoggedIn(true); // Change this to true to simulate logged-in status
// //   }, []);

// //   return (
// //     <NavigationContainer>
// //       {isLoggedIn ? (
// //         <MainContainer /> // Show the MainContainer (with bottom navigation) after login
// //       ) : (
// //         <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
// //           <Stack.Screen name="Welcome" component={Welcome} />
// //           <Stack.Screen name="Login" component={Login} />
// //           <Stack.Screen name="Signup" component={Signup} />
// //         </Stack.Navigator>
// //       )}
// //     </NavigationContainer>
// //   );
// // };

// // export default App;
