import { View, Text, TouchableOpacity } from "react-native";
import { loginWithGoogle } from "../../firebaseConfig";
import { useAuth } from "../../hooks/AuthProvider";
const WithGoogle = () => {


    const handleSignIn = () => {

      console.log('====================================');
      console.log('handleSignIn');
      console.log('====================================');
    };
    return (

        <TouchableOpacity
            style="bg-blue-500 text-white rounded-lg px-4 py-2"
            onPress={handleSignIn}
        >
            <Text style="text-center">  Sign in with Google</Text>
        </TouchableOpacity>
    );
};

export default WithGoogle;
