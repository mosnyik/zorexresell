import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "@/config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.closeTab}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/chair.jpg")}
          style={styles.image}
          contentFit="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeTab: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    flex: 1,
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
