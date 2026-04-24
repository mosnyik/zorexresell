import colors from "@/config/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CardProps } from "./Card";

function ListingDetailsScreen({ title, subtitle, imageUrl }: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.cardText}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{subtitle}</Text>
      </View>
      <View>
        <Image
          style={styles.poster}
          source={require("@/assets/mosnyik.jpeg")}
        />
        <Text>Mosnyik</Text>
        <Text>5 Listings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardText: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
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
  poster: {
    height: 80,
    width: 80,
    borderRadius: 40,
    margin: 15,
    },
    posterContainer: {
      
  }
});

export default ListingDetailsScreen;
