import { Image } from "expo-image";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/config/colors";

function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/background.jpg")}
      >
        <View style={styles.content}>
          <Image
            source={require("../../assets/logo-red.png")}
            style={styles.logoImage}
          />
          <Text style={styles.welcomeText}>
            Not using it again? Just sell it
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.signup}></View>
          <View style={styles.signin}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 60,
  },
  logoImage: {
    height: 120,
    width: 120,
  },
  signup: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
  },
  signin: {
    backgroundColor: colors.secondary,
    height: 50,
    width: "100%",
  },
  welcomeText: {
    marginTop: 20,
  },
});

export default WelcomeScreen;
