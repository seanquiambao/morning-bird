import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import bg1 from "@/assets/images/bg1.png";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useLocation } from "../context/location-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import home from "@/assets/icons/home.png";

const storeLocal = async (value: string) => {
  try {
    await AsyncStorage.setItem("source", value);
  } catch (error) {
    console.error(error);
  }
};
const SourceScreen = () => {
  const { location, setLocation } = useLocation();
  return (
    <ImageBackground
      source={bg1 as ImageSourcePropType}
      className="flex flex-col p-4 h-full"
    >
      <View className="flex flex-col gap-4">
        <Image source={home as ImageSourcePropType} className="self-center" />
        <Text className="text-4xl text-white font-bold self-center">Home</Text>
      </View>
      <View className="flex flex-col gap-4">
        <Text className="font-bold text-white">Location</Text>
        <View className="w-full h-[100%] ">
          <GooglePlacesAutocomplete
            placeholder="Search" // Darken placeholder text
            styles={{
              textInput: {
                color: "#000", // Darken input text
                backgroundColor: "white", // Optional: Set input background
              },
              listView: {
                backgroundColor: "#fff", // Set uniform background for suggestions
                width: "100%",
              },
              row: {
                backgroundColor: "#fff", // Uniform background for each suggestion
                width: "100%",
              },
              separator: {
                height: 0, // Remove separators
              },
            }}
            onPress={(data, details = null) => {
              storeLocal(data.description);
              setLocation({ ...location, source: data.description });
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

export default SourceScreen;
