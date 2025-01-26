import { View, Text } from "react-native";
import { ImageBackground } from "react-native";
import { Href, Link } from "expo-router";
import bg1 from "@/assets/images/bg1.png";

type props = {
  source: string;
  destination: string;
};
const RoutesScreen = ({ source, destination }: props) => {
  return (
    <ImageBackground source={bg1} className="flex flex-col p-4 h-full">
      <View>
        <Link href={"/routes/edit" as Href}>
          <Text className="text-white">Hello</Text>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default RoutesScreen;
