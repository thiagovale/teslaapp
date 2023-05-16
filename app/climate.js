import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Climate() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/climate.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Pressable onPress={() => router.back()} style={styles.button}>
        <Entypo name="chevron-left" size={42} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>
        <View style={styles.controls}>
          <View style={styles.action}>
            <Ionicons name="md-power-sharp" size={36} color="white" />
            <Text style={{ color: "white" }}>On</Text>
          </View>

          <View style={styles.temperature}>
            <Entypo name="chevron-left" size={48} color="gray" />
            <Text style={{ color: "white", fontSize: 36, fontWeight: 500 }}>
              68°
            </Text>
            <Entypo name="chevron-right" size={48} color="gray" />
          </View>

          <View style={styles.action}>
            <MaterialCommunityIcons name="car-door" size={36} color="gray" />
            <Text style={{ color: "white" }}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "65%",
  },
  button: {
    position: "absolute",
    top: 50,
    left: 25,
    padding: 10,
    backgroundColor: "#2f3030",
    borderRadius: 5,
  },
  footer: {
    height: "35%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  label: {
    color: "gray",
    fontWeight: "600",
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  action: {
    alignItems: "center",
    rowGap: 10,
  },
  temperature: {
    flexDirection: "row",
    alignItems: "center",
  },
});
