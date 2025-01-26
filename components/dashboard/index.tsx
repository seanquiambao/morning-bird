import { Href, Link } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import React from "react";
import dashboardgradient from "@/assets/images/dashboard-gradient.png";
import SetHomeLocation from "./homelocation";
import AddLocation from "./AddLocation";
import Location from "./Location";
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
    <ImageBackground
      source={dashboardgradient}
      className="flex flex-col items-center h-full w-full py-8 gap-y-5"
    >
      <View>
        <Text className="font/[Geist-VariableFont] text-5xl font-semibold text-white py-8">
          Good Morning!
        </Text>
      </View>
      <SetHomeLocation location={location.source} />
      <Location
        locationsID={"3"}
        locationName={location.destination}
        routeName={"Route"}
        eta={"15"}
      />
      <View className="h-8"></View>
      <AddLocation locationsID="1" />
    </ImageBackground>
  );
};

export default DashboardScreen;
