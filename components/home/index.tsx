import { Text, Image } from "react-native";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";
import bg1 from "@/assets/images/bg1.png";
import logo from "@/assets/images/logo.png";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={bg1}
      className="flex flex-col h-full w-full p-10 items-center gap-6"
    >
      <Text className="text-8xl font-bold text-white self-center text-center">
        Morning Bird
      </Text>
      <Image source={logo} />
      <Text className="text-white text-4xl font-bold text-center">
        Jumpstart your morning routine
      </Text>
      <Link
        href="/(dashboard)"
        className="text-white bg-white/10 p-5 rounded-full font-bold w-full text-center text-2xl"
      >
        Visit your dashboard
      </Link>
    </ImageBackground>
  );
};

export default HomeScreen;
