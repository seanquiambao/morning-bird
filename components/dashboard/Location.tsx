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
    <Link
      href={`/routes/0` as Href}
      className="bg-white/10 rounded-3xl w-5/6 flex flex-col p-8 gap-y-4"
    >
      <View>
        <Text className="text-5xl text-white font-bold font-[Geist]">
          {locationName}
        </Text>
      </View>

      <View className="flex flex-row items-center gap-4">
        <Image source={sun} />
        <Text className="text-xl text-white font-bold font-[Geist]">
          60°F
        </Text>
        <Text className="text-m text-white font-bold font-[Geist]">
        H:61° L:47°
        </Text>
      </View>

      <View>
        <Text className="text-xl text-white font-bold font-[Geist]">
          Optimal Route
        </Text>
        <Route routeName={routeName} eta={eta} />
      </View>
    </Link>
  );
};

export default Location;
