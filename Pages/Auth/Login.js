import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { signIn } from '../../firebaseConfig';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signIn(email, password);
    };

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
                <TouchableOpacity
                    style="bg-blue-500 text-white rounded-lg px-4 py-2"
                    onPress={handleSignIn}
                >
                    <Text style="text-center">Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginPage;
