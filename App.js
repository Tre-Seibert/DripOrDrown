import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeMenu from "./src/screens/HomeMenu";
import LoadIn from "./src/screens/LoadIn";
import LogIn from "./src/screens/LogIn";
import SignUp from "./src/screens/SignUp";
import Article from "./src/screens/Article";
import ForgotPassword from "./src/screens/ForgotPassword";
import CalendarScreen from "./src/screens/Calendar";
import AddArticle from "./src/screens/AddArticle";

const firebaseConfig = {
    apiKey: "AIzaSyAF9QW9bvXKyWIiPpmaOgKunA51Jxe4iAw",
    authDomain: "dripordrown-90905.firebaseapp.com",
    databaseURL: "https://dripordrown-90905-default-rtdb.firebaseio.com",
    projectId: "dripordrown-90905",
    storageBucket: "dripordrown-90905.appspot.com",
    messagingSenderId: "217796469697",
    appId: "1:217796469697:web:3324196fa615c8c4f6c540",
    measurementId: "G-F0RSLNR2DY",
};

const fbApp = initializeApp(firebaseConfig);
const db = getFirestore(fbApp);
const Stack = createStackNavigator();
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [checking, setIsChecking] = React.useState(true);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="loginOriginal"
                screenOptions={{
                    headerShown: true,
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={LoadIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={LogIn} />
                <Stack.Screen name="Register" component={SignUp} />
                <Stack.Screen name="Article" component={Article} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <Stack.Screen name="AddArticle" component={AddArticle} />
                <Stack.Screen name="Calendar" component={CalendarScreen} />
                <Stack.Screen name="Home" component={HomeMenu}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
/*isSignedIn ? (
  <Stack.Screen name="Calendar" component={Calendar1} />
          <>
            <Stack.Screen name="HomeMenu" component={HomeMenu} />
            <Stack.Screen name="Closet" component={Closet} />
          </>
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="LoadIn" component={LoadIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        );*/

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
    },
    highlight: {
        fontWeight: "700",
    },
});

export default App;
