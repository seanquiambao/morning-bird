import { Href, Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocation } from "../context/location-context";
import { useEffect } from "react";
const DashboardScreen = () => {
  const { location, setLocation } = useLocation();

  useEffect(() => {
    if (!location.source || !location.destination) {
      console.log("Nope!");
      return;
    }

    const fetchRoutes = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${location.source}&destination=${location.destination}&alternatives=true&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoutes();
  });
  return (
    <View>
      <Link href={"/routes/0" as Href}>
        <Text>Dashboard Screen</Text>
      </Link>
    </View>
  );
};

export default DashboardScreen;
