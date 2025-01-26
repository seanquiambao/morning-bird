import { Href, Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocation } from "../context/location-context";

const DashboardScreen = () => {
  const { location, setLocation } = useLocation();
  return (
    <View>
      <Link href="/routes/0">
        <Text>Dashboard Screen</Text>
      </Link>

      <Text>{location.source}</Text>
      <Text>{location.destination}</Text>
    </View>
  );
};

export default DashboardScreen;
