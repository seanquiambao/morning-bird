import { View, Text, Image } from "react-native";
import { ImageBackground } from "react-native";
import { Href, Link } from "expo-router";
import direction from "@/assets/icons/directions.png";
import Route from "@/components/routes/route";
import bg from "@/assets/images/bg1.png";
import { useLocation } from "../context/location-context";
import { useEffect, useState } from "react";
import axios from "axios";

const RoutesScreen = () => {
  const { location, setLocation } = useLocation();
  const [items, setItems] = useState([]);
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

    fetchRoutes().then((data) => {
      setItems(data.routes);
    });
  });
  return (
    <View className="">
      <ImageBackground source={bg} className="flex flex-col p-4 h-full">
        <View>
          <Image source={direction} />
        </View>
        <View className="flex flex-col gap-4">
          {items.map((item: any, index: any) => (
            <Route
              key={index}
              routeName="Route"
              eta={item.legs[0].duration.text}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default RoutesScreen;
