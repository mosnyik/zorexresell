import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/background.jpg")}
        style={styles.background}
        contentFit="cover"
      />
      <View style={styles.content}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logoImage}
        />
        <Text style={styles.welcomeText}>Not using it again? Just sell it</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.signup}></View>
        <View style={styles.signin}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 60,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  signup: {
    backgroundColor: "tomato",
    height: 50,
    width: "100%",
  },
  signin: {
    backgroundColor: "dodgerblue",
    height: 50,
    width: "100%",
  },
  logoImage: {
    height: 120,
    width: 120,
  },
  welcomeText: {
    marginTop: 20,
  },
});
