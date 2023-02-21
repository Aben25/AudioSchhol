import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Button } from 'react-native';
import WithGoogle from '../Components/WithGoogle';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/AuthProvider';

const LoginPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
        login(email, password).then (() => {
            navigation.navigate('Home');
            console.log('Login successful');
        }).
        catch((error) => {
            console.log(error.message);
        });
    };

    const handleCreateAccountPress = () => {
        navigation.navigate('Signup');
    }

    return (
        <View style="flex: 1; justify-content: center; items-center; bg-gray-200">
            <View style="w-full px-4 py-8 bg-white rounded-lg shadow-lg">
                <Text style="text-2xl font-bold text-gray-800 text-center mb-6">
                    Login
                </Text>
                <TextInput
                    style="border border-gray-400 rounded-lg px-4 py-2 mb-4"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style="border border-gray-400 rounded-lg px-4 py-2 mb-4"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />

            </View>
            <TouchableOpacity
                className="bg-blue-500 rounded-lg py-2 px-4"
                onPress={handleLogin}
            >

                <Text className="text-white font-bold">Create a new account</Text>
            </TouchableOpacity>
            <WithGoogle/>
        </View>
    );
};

export default LoginPage;
