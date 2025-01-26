import { View, Text, Image } from "react-native";
import { Href, Link } from "expo-router";

interface props {
  locationsID: string;
}

const AddLocation = ({ locationsID }: props) => {
  return (
    <View className="bg-white/25 h-[10%] w-[75%] justify-center items-center rounded-3xl">
      <Link href={`/routes/${locationsID}` as Href}>
        <Image source={require("../assets/icons/+.png")} />
        <Text className="text-white text-center text-lg font-bold font-[Geist]">
          Add Location
        </Text>
      </Link>
    </View>
  );
};

export default AddLocation;
