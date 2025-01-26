import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import bg1 from "@/assets/images/bg1.png";
import directions from "@/assets/icons/directions.png";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useLocation } from "../context/location-context";
const DestinationScreen = () => {
  const { location, setLocation } = useLocation();
  return (
    <ImageBackground source={bg1} className="flex flex-col p-4 h-full">
      <View className="flex flex-col gap-4">
        <Image source={directions} className="self-center" />
        <TextInput
          value="UCR"
          className="text-white self-center font-bold text-6xl"
        />
      </View>
      <View className="flex flex-col gap-4">
        <Text className="font-bold text-white">Location</Text>
        <View className="w-full h-[100%] bg-white/50">
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              setLocation({ ...location, destination: data.description });
            }}
            query={{
              key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API,
              language: "en",
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default DestinationScreen;
