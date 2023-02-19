import React from 'react';
import { View, Text, Button } from 'react-native';
import Login from './Pages/Auth/Login';
import SignInWithGoogle from './Pages/Components/signInWithGoogle';
import SignupPage from './Pages/Auth/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex flex-col justify-center items-center h-full">
      <Text className="text-4xl font-bold mb-4">Welcome to my app!</Text>
      <Login />
      <SignInWithGoogle />
      <Button title="Create a New Account" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default App;
