import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as firebase from "firebase";
import "react-native-gesture-handler";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Beranda from "./screens/Beranda";
import Beranda2 from "./screens/Beranda2";
import InputData from "./screens/InputData";

const firebaseConfig = {
  apiKey: "AIzaSyAIjXh8Yg9aItBuYTPf-M53mIkLjO7BjRs",
  authDomain: "petafirebase-40c4e.firebaseapp.com",
  projectId: "petafirebase-40c4e",
  storageBucket: "petafirebase-40c4e.appspot.com",
  messagingSenderId: "282026665324",
  appId: "1:282026665324:web:a6cb18cf662ad8d04a7f49",
  measurementId: "G-PCSDPSCSM3",
};
firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda1">
        {(props) => <Beranda {...props} firebase={firebase} />}
      </Tab.Screen>
      <Tab.Screen name="Beranda2">
        {(props) => <Beranda2 {...props} firebase={firebase} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Beranda1">
        {(props) => <Beranda {...props} firebase={firebase} />}
      </Drawer.Screen>
      <Drawer.Screen name="Beranda2">
        {(props) => <Beranda2 {...props} firebase={firebase} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Beranda"
          component={DrawerNavigator}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                title="Info"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen name="Input Data">
          {(props) => <InputData {...props} firebase={firebase} />}
        </Stack.Screen>
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <StatusBar style="auto" />
        <InputData firebase={firebase} />
        <Beranda firebase={firebase} />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
