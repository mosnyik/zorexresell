import colors from "@/config/colors";
import { StyleSheet, Text, View } from "react-native";

function CustomButton({
  title = "Button",
  bg,
}: {
  title?: string;
  bg?: string;
}) {
  return (
    <View style={styles.container}>
      <View style={[styles.myButton, { backgroundColor: bg }]}>
        <Text style={styles.ButtonText}>{title}</Text>
      </View>
    </View>
  );
  ``;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.black,
    marginBottom: 20,
  },
  ButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  myButton: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default CustomButton;
