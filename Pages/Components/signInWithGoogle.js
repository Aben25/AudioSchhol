import { View, Text } from "react-native";
import { signInWithGoogle } from "../../firebaseConfig";

const SignInWithGoogle = () => {
    return (
        <Text
            className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={signInWithGoogle}
        >
            Sign in with Google
        </Text>
    );
};

export default SignInWithGoogle;
