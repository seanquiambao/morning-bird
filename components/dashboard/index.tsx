import { Href, Link } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import React from "react";
import dashboardgradient from "@/assets/images/dashboard-gradient.png";
import AddLocation from "./AddLocation";
import Location from "./Location";

const DashboardScreen = () => {
  return (
    <ImageBackground
      source={dashboardgradient}
      className="flex flex-col items-center h-full w-full py-8"
    >
      <View>
        <Text className="font/[Geist-VariableFont] text-5xl font-semibold text-white py-8">
          Good Morning!
        </Text>
      </View>
      <Location locationsID={"3"} routeName={"Route"} eta={"15"} />
      <View className="h-8"></View>
      <AddLocation locationsID="1"/>
    </ImageBackground>
  );
};

export default DashboardScreen;