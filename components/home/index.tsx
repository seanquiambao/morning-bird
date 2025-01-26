import { View, Text } from "react-native";
import { Href, Link } from "expo-router";
import Route from "@/components/routes/route";
const HomeScreen = () => {
  return (
    <View className="bg-blue-500 ">
      <Link href={"/(dashboard)" as Href}>
        <Route routeName="Route 61" eta="15" />
      </Link>
    </View>
  );
};

export default HomeScreen;
