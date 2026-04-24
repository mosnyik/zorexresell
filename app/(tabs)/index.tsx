import ListingDetailsScreen from "@/components/ListingDetailsScreen";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <ListingDetailsScreen
      title="Red Jacket for Sale!"
      subtitle="$100"
      imageUrl={require("../../assets/jacket.jpg")}
    />
  );
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <CustomButton />;
}
