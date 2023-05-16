import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My Model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <FontAwesome name="user-circle" size={30} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
});
