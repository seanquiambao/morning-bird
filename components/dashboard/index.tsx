import { Href, Link } from "expo-router";
import { Text, View } from "react-native";

const DashboardScreen = () => {
  return (
    <View>
      <Link href={"/routes/0" as Href}>
        <Text>Dashboard Screen</Text>
      </Link>
    </View>
  );
};

export default DashboardScreen;
