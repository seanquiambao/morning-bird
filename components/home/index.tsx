import { View, Text } from "react-native";
import { Href, Link } from "expo-router";
const HomeScreen = () => {
  return (
    <View>
      <Link href={"/(dashboard)" as Href}>
        <Text>Hello WORLD</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;
