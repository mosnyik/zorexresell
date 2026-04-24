import colors from "@/config/colors";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

export interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: ImageSourcePropType;
}
function Card({ title, subtitle, imageUrl }: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        <View style={styles.cardContainer}>
          <Image source={imageUrl} style={styles.image} />
          <View style={styles.cardText}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{subtitle}</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.containerBody}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    width: "100%",
    height: 300,
    backgroundColor: colors.cardBg,
    alignContent: "center",
    justifyContent: "center",
  },
  cardContainer: {
    margin: "10%",
    backgroundColor: colors.white,
    paddingBottom: 25,
    borderRadius: 20,
  },
  cardText: {
    padding: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  containerBody: {
    flex: 1,
    width: "100%",
    height: "50%",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  titleText: {
    fontWeight: "500",
    fontSize: 14,
  },
  subTitleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.secondary,
  },
});

export default Card;
