import { StyleSheet, View, Image, FlatList } from "react-native";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";

import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
import Controls from "../components/Controls";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />

      <Image source={car} style={styles.image} resizeMode="contain" />

      {/* menu option */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuOptions}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
