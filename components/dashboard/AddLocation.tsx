import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Href, Link } from "expo-router";
import Plus from "@/assets/icons/+.png";

interface props {
  locationsID: string;
}

const AddLocation = ({ locationsID }: props) => {
  return (
    <View className="bg-white/25 h-[10%] w-[75%] justify-center items-center rounded-3xl">
      <Link href={`/routes/0` as Href}>
        <Image source={Plus as ImageSourcePropType} />
        <Text className="text-white text-center text-lg font-bold font-[Geist]">
          Add Location
        </Text>
      </Link>
    </View>
  );
};

export default AddLocation;
