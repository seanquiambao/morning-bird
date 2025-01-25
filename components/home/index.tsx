import { View, Text } from "react-native";
import { Href, Link } from "expo-router";
const HomeScreen = () => {
  return (
    <View className="bg-blue-500">
      <Link href={"/(dashboard)" as Href}>
        <Text className="bg-red-500">ello WORLD</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;
