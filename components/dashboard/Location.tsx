import { View, Text, Image } from "react-native";
import { Href, Link } from "expo-router";
import Route from "@/components/routes/route";
import sun from "@/assets/icons/sun.png";

interface props {
  locationName: string;
  routeName: string;
  eta: string;
}

const Location = ({ locationName, routeName, eta }: props) => {
  return (
    <View className="bg-white/10 rounded-3xl w-5/6 flex flex-col p-5">
      <Link href={"/routes" as Href}>
        <View className="">
          <View className="flex items-start">
            <Text className="text-5xl text-white font-bold font-[Geist]">
              {locationName}
            </Text>
            <View className="flex flex-row items-center gap-4">
              <Image source={sun} />
              <Text className="text-3xl text-white font-bold font-[Geist]">
                60°F
              </Text>
              <Text className="text-xl text-white font-bold font-[Geist]">
                H:61° L:47°
              </Text>
            </View>
            <Text className="text-xl text-white font-bold font-[Geist]">
              Optimal Route
            </Text>
          </View>
          <View>
            <Route routeName={routeName} eta={eta} />
          </View>
        </View>
      </Link>
    </View>
  );
};

export default Location;
