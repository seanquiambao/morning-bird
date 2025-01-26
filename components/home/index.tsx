import React from "react";
import { View } from "react-native";
import DashboardScreen from "@/components/dashboard";

const HomeScreen = () => {
  return (
    <View className="flex flex-col items-center h-full">
      <DashboardScreen />
    </View>
  );
};

export default HomeScreen;
