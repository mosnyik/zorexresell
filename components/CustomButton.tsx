import colors from "@/config/colors";
import { StyleSheet, Text, View } from "react-native";

function CustomButton({ title = "Button" }: { title: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.myButton}>
        <Text style={styles.ButtonText}>{title}</Text>
      </View>
    </View>
  );``
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  myButton: {
    width: "80%",
    height: 50,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default CustomButton;
