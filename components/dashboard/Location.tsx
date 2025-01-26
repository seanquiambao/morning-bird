import { View, Text, Image } from "react-native";
import { Href, Link } from "expo-router";
import Route from "@/components/routes/route";

interface props {
  locationsID: string;
  locationName: string;
  routeName: string;
  eta: string;
}

const Location = ({ locationsID, locationName, routeName, eta }: props) => {
  return (
    <View className="bg-white/10 rounded-3xl w-5/6 flex flex-col p-5">
        <Link href={`/routes/${locationsID}` as Href}>
        <View className="">
            <View className="flex items-start">
                <Text className="text-5xl text-white font-bold font-[Geist]"> {locationName} </Text>
                <Text className="text-xl text-white font-bold font-[Geist]"> Optimal Route </Text>   
            </View>
            <View className="">
                <Route routeName={routeName} eta={eta} />
            </View> 
        </View>
      </Link>
    </View>
  );
};

export default Location;