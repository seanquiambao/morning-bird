import { Href, Link } from "expo-router";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import React from "react";
import dashboardgradient from "@/assets/images/dashboard-gradient.png";
import SetHomeLocation from "./homelocation";
import AddLocation from "./AddLocation";
import Location from "./Location";
import { useLocation } from "../context/location-context";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardScreen = () => {
  const { location, setLocation } = useLocation();
  const [items, setItems] = useState<Record<any, any>>([]);
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

    fetchRoutes().then((data) => {
      setItems(data.routes);
    });
  }, [location.source, location.destination]);
  return (
    <ImageBackground
      source={dashboardgradient as ImageSourcePropType}
      className="flex flex-col items-center h-full w-full py-8 gap-y-6"
    >
      <View>
        <Text className="font/[Geist-VariableFont] text-5xl font-semibold text-white py-8">
          Good Morning!
        </Text>
      </View>
      <SetHomeLocation location={location.source} />
      <Location
        locationName={location.destination}
        routeName={items[0]?.summary}
        eta={items[0]?.legs[0].duration.text}
      />
    </ImageBackground>
  );
};

export default DashboardScreen;
