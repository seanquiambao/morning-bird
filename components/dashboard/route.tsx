import { View, Text } from "react-native";
import { alt_route } from "@/assets/icons/alt_route.png";
import { Image } from "react-native-reanimated/lib/typescript/Animated";

type props = {
  routeName: string;
  eta: string;
};
const Route = ({ routeName, eta }: props) => {
  <View className="w-5/6 flex flex-row font-[Geist] text-white ">
    <View>
      <Image source={alt_route} />
    </View>
    <View className="text-xl">
      <Text className="">{routeName}</Text>
    </View>
    <View className="flex flex-col">
      <Text className="">{eta}</Text>
      <Text className="">min</Text>
    </View>
  </View>;
};
