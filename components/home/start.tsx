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
const StartScreen = () => {
  return (
    <ImageBackground source={bg1} className="flex flex-col p-4 h-full">
      <View className="flex flex-col gap-4">
        <Image source={directions} className="self-center" />
        <Text className="text-5xl font-bold">Home</Text>
      </View>
      <View className="flex flex-col gap-4">
        <Text className="font-bold text-white">Location</Text>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {}}
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API,
            language: "en",
          }}
        />
        <Pressable className="border rounded-md border-white">
          <Text className="text-white font-bold p-5 self-center text-2xl">
            Submit
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
