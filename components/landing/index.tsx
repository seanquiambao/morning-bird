import { SafeAreaView, View, Text } from "react-native";
import { Href, Link } from "expo-router";
import SetHomeLocation from "@/components/dashboard/homelocation";

const HomeScreen = () => {
  return (
    <View className="flex flex-col items-center bg-morning-navy h-full">
      <SetHomeLocation />
    </View>
  );
};

export default HomeScreen;
