import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Beranda({ firebase }) {
  const [dataMarker, setDataMarker] = useState([]);

  const [marker, setMarker] = useState([]);

  // mengambil data dari firebase dan masukkan ke var dataMarker
  useEffect(() => {
    var titikRef = firebase.database().ref("titik");
    titikRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(Object.values(data));
      setDataMarker(Object.values(data));
    });
  }, []);

  useEffect(() => {
    console.log(dataMarker);
    const data_difilter = dataMarker.filter((data) => data.ready);
    const komponenMarker = data_difilter.map((data, idx) => {
      return (
        <Marker
          key={idx}
          coordinate={{
            latitude: data.posisiMarker.latitude,
            longitude: data.posisiMarker.longitude,
          }}
          title={data.nim}
        />
      );
    });
    setMarker(komponenMarker);
  }, [dataMarker]);

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
        {marker}
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
