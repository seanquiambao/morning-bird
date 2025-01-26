import { Href, Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocation } from "../context/location-context";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DashboardScreen = () => {
  const { location, setLocation } = useLocation();

  useEffect(() => {
    const fetchLocal = async () => {
      const sourceStorage = await AsyncStorage.getItem("source");
      const destinationStorage = await AsyncStorage.getItem("destination");

      setLocation({
        source: sourceStorage as string,
        destination: destinationStorage as string,
      });
    };

    fetchLocal();

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
  }, []);
  return (
    <View>
      <Link href="/routes/0">
        <Text className="p-5">Dashboard Screen</Text>
      </Link>

      <Link href="/start">
        <Text className="p-5">Dashboard Screen</Text>
      </Link>

      <Text>{location.source}</Text>
      <Text>{location.destination}</Text>
    </View>
  );
};

export default DashboardScreen;
