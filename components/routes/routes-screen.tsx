
import { ImageBackground, View, TextInput, Text, Image, ImageSourcePropType } from "react-native";
import { Href, Link } from "expo-router";
import bg1 from "@/assets/images/bg1.png";
import directions from "@/assets/icons/directions.png";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useLocation } from "../context/location-context";

type props = {
  source: string;
  destination: string;
};

const storeLocal = async (value: string) => {
  try {
    await AsyncStorage.setItem("source", value);
  } catch (error) {
    console.error(error);
  }
};

const RoutesScreen = ({ source, destination }: props) => {
  const { location, setLocation } = useLocation();
  return (

    <ImageBackground source={bg1 as ImageSourcePropType} className="flex flex-col p-4 h-full">
      <View className="flex flex-col space-y-4">
        <View className="flex flex-col space-y-2 w-full">

          <View className="h-8" />

          <View className="items-center">
            <Image source={directions as ImageSourcePropType} className="w-50 h-50" />
            <TextInput
              className="text-center opacity-70 text-white rounded-lg w-fit focus:outline-none focus:ring-2 focus:ring-blue-500 text-5xl font-bold border-b border-white"
              placeholderTextColor="#FFFFFF"
              placeholder="Edit title"
            />
          </View>

          <View className="h-8" />

          <Text className="text-white text-lg font-[Geist]">
            Location
          </Text>


          <View className="w-full h-[100%]">
            <GooglePlacesAutocomplete
              placeholder="Enter an Address" // Darken placeholder text

              styles={{
                textInput: {
                  color: '#000', // Darken input text
                  backgroundColor: 'white', // Set input background
                  opacity: 0.4,
                },
                listView: {
                  backgroundColor: '#fff', // Set uniform background for suggestions
                  width: '100%',
                },
                row: {
                  backgroundColor: '#fff', // Uniform background for each suggestion
                  width: '100%',
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

      </View>
    </ImageBackground>
  );
};

export default RoutesScreen;
