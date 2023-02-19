import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { auth, signInWithGoogle, createNew } from '../../firebaseConfig';

const SignupPage = () => {
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
