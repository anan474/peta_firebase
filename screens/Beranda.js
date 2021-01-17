import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Beranda() {
  return (
    <View style={styles.container}>
      <Text>Halaman Beranda</Text>
      <MapView
        initialRegion={{
          latitude: -0.026,
          longitude: 109.342,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: -0.0263, longitude: 109.3424 }}
          title="MHS NIM D1041151018"
        />
        <Marker
          coordinate={{ latitude: -0.02641, longitude: 109.3422 }}
          title="MHS NIM D1041151050"
        />
        <Marker
          coordinate={{ latitude: -0.02636, longitude: 109.3324 }}
          title="MHS NIM D1041151078"
        />
      </MapView>
      <Button title="Input Data Baru" />
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});
