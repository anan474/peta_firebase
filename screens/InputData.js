import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TextInput,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function InputData() {
  const [posisiMarker, setPosisiMarker] = useState(null);
  const [marker, setMarker] = useState(null);
  const [nim, setNim] = useState(null);

  useEffect(() => {
    console.log("di use Effect", posisiMarker);
    if (posisiMarker) {
      setMarker(
        <Marker
          coordinate={{
            latitude: posisiMarker.latitude,
            longitude: posisiMarker.longitude,
          }}
        />
      );
    }
  }, [posisiMarker]);

  return (
    <View style={styles.container}>
      <Text>Halaman Input Data</Text>
      <MapView
        initialRegion={{
          latitude: -0.026,
          longitude: 109.342,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          console.log("di on press", e.nativeEvent.coordinate);
          setPosisiMarker(e.nativeEvent.coordinate);
        }}
        style={styles.map}
      >
        {marker}
      </MapView>
      <TextInput
        placeholder="latitude"
        editable={false}
        value={posisiMarker ? String(posisiMarker.latitude) : ""}
      />
      <TextInput
        placeholder="longitude"
        editable={false}
        value={posisiMarker ? String(posisiMarker.longitude) : ""}
      />
      <TextInput
        placeholder="NIM"
        value={nim}
        onChangeText={(value) => {
          setNim(value);
        }}
      />
      <Button
        title="Simpan"
        onPress={() => {
          console.log("data yg akan dikirim", {
            posisiMarker,
            nim,
          });
        }}
      />
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
