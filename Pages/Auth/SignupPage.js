import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { auth, signInWithGoogle, createNew } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const SignupPage = () => {

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await createNew(auth, email, password);
            // Handle successful sign-in here
        } catch (error) {
            // Handle sign-in error here
        }
    };

    return (
        <View>
            <Text>Sign Up Page</Text>
         
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Signup" onPress={handleSignup} />
        </View>
    );
};

export default SignupPage;
