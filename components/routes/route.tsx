import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import alt_route from "@/assets/icons/alt_route.png";

interface props {
  routeName: string;
  eta: string;
}

const Route = ({ routeName, eta }: props) => {
  let formattedETA = "";
  const hours = eta.match(/(\d+)\s*hours?/);
  const min = eta.match(/(\d+)\s*mins?/);
  if (hours && min) {
    formattedETA = `${hours[1]}h ${min[1]}m`;
  } else if (min) {
    formattedETA = `${min[1]}m`;
  } else {
    formattedETA = "0m";
  }
  return (
    <View className="w-full flex flex-row justify-between font-[Geist] bg-gray-300/10 rounded-2xl py-12 px-5">
      <View className="flex flex-row items-center">
        <Image source={alt_route as ImageSourcePropType} className="" />
        <Text className="text-3xl text-white font-bold w-1/2 text-wrap">
          {routeName}
        </Text>
      </View>
      <View className="flex flex-col self-center">
        <Text className="text-5xl text-white font-bold">{formattedETA}</Text>
      </View>
    </View>
  );
};

export default Route;
