import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Pages/HomeScreen';
import SignupPage from './Pages/Auth/SignupPage';
import LoginPage from './Pages/Auth/Login';
import { AuthProvider } from './hooks/AuthProvider';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Signup" component={SignupPage} />
      <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (

    <NavigationContainer>
      <AuthProvider>

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </AuthProvider>

    </NavigationContainer>
  );
};

export default App;
