import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Link } from "expo-router";
import home from "@/assets/icons/home.png";

type props = {
  location: string;
};
const SetHomeLocation = ({ location }: props) => {
  return (
    <Link
      href="/start"
      className="flex flex-row items-center justify-center p-4 bg-white/10 rounded-2xl w-[80%]"
    >
      <Image source={home as ImageSourcePropType} />
      <View className="pl-4">
        <Text className="font/[Geist-VariableFont] text-2xl font-bold text-white">
          Set Home Location
        </Text>
        <Text className="font/[Geist-VariableFont] text-md font-bold text-white">
          {location}
        </Text>
      </View>
    </Link>
  );
};

export default SetHomeLocation;
