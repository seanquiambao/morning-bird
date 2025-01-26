import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SetHomeLocation = () => {
  return (
    <View className="flex-row items-center justify-center p-4 bg-white/10 rounded-2xl w-[80%]">
      <Image
        source={require("../assets/icons/home.png")}
        className="w-8 h-8 mr-8"
      />
      <View>
        <Text className="font/[Geist-VariableFont] text-lg font-semibold text-white">
          Set Home Location
        </Text>
        <Text className="font/[Geist-VariableFont] text-sm text-white">
          Eastvale, CA
        </Text>
      </View>
    </View>
  );
};

export default SetHomeLocation;
