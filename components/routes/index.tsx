import { View, Text } from "react-native";
import { Href, Link } from "expo-router";
const RoutesScreen = () => {
  return (
    <View>
      <Link href={"/routes/edit" as Href}>
        <Text>Hello</Text>
      </Link>
    </View>
  );
};

export default RoutesScreen;
