import Card from "@/components/Card";

export default function HomeScreen() {
  return (
    <Card
      title="Red Jacket for Sale!"
      subtitle="$100"
      imageUrl={require("../../assets/jacket.jpg")}
    />
  );
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <CustomButton />;
}
