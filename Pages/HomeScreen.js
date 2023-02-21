import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlightBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginPage from './Auth/Login';
import WithGoogle from './Components/WithGoogle';
import { useAuth } from '../hooks/AuthProvider';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { logout } = useAuth();
    const { currentUser } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogout = () => {
        logout().then(() => {
            navigation.navigate('Login');
            console.log('Logout successful');
        }).
            catch((error) => {
                console.log(error.message);
            });
    };
    useEffect(() => {
        if (currentUser) {
            setIsAuthenticated(true);
        }
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            ),
        });
    }, [currentUser]);

    console.log('====================================');
    console.log(currentUser);
    console.log('====================================');
    return (

        <>
            {isAuthenticated ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home Screen</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
                        onPress={handleLogout}
                    >
                        <Text style={{ color: 'white' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <LoginPage />
            )}
        </>
    );
};

export default HomeScreen;