import React from "react";
import { View, Text } from "react-native";
import { initializeApp } from "firebase/app";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFirestore } from "firebase/firestore/lite";
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
import Closet from "./Closet";
import CalendarPage from "./Calendar";
require("firebase/firestore");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator initialRouteName="Calendar">
            <Tab.Screen
                name="Closet"
                component={Closet}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Calendar" component={CalendarPage} />
        </Tab.Navigator>
    );
}
