import { View, Text, Image } from "react-native";
import React from "react";

interface props {
  routeName: string;
  eta: string;
}

const Route = ({ routeName, eta }: props) => {
  return (
    <View className="w-full flex flex-row justify-between font-[Geist] bg-gray-300/10 rounded-2xl py-12 px-5">
      <View className="flex flex-row">
        <Image
          source={require("../../assets/icons/alt_route.png")}
          className=""
        />
        <Text className="text-3xl text-white font-bold">{routeName}</Text>
      </View>
      <View className="flex flex-col">
        <Text className="text-5xl text-white font-bold">{eta}</Text>
        <Text className="text-3xl text-white font-bold">min</Text>
      </View>
    </View>
  );
};

export default Route;
