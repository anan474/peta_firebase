import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";

import Beranda from "./screens/Beranda";
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

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <InputData firebase={firebase} /> */}
      <Beranda firebase={firebase} />
    </View>
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
