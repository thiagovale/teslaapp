import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function MenuOption({ item }) {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

        <Text style={styles.optionText}>{item.name}</Text>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
