import { useState, useEffect, useContext, createContext } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  loginWithPopup,
} from "firebase/auth";
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

import { auth, provider } from "../firebaseConfig";
WebBrowser.maybeCompleteAuthSession();

const authContext = createContext();

// GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//     webClientId: '1019797180882-o1sebd6180u8k37jp5v4kp83e64rjhh7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '', // specifies a hosted domain restriction
//     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//     accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId: '1019797180882-o1sebd6180u8k37jp5v4kp83e64rjhh7.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });
export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '215551065927-a2hl0pg40ancojubcsj9sjnjak0imm4b.apps.googleusercontent.com',
    },
  );
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // async function googleLogin() {
  //     try {
  //         await GoogleSignin.hasPlayServices();
  //         const userInfo = await GoogleSignin.signIn();
  //         this.setState({ userInfo });
  //     } catch (error) {
  //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //             // user cancelled the login flow
  //         } else if (error.code === statusCodes.IN_PROGRESS) {
  //             // operation (e.g. sign in) is in progress already
  //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //             // play services not available or outdated
  //         } else {
  //             // some other error happened
  //         }
  //     }
  // }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
}
