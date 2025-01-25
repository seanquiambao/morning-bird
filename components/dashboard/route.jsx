import { View, Text} from "react-native";
import { alt_route } from "assets\icons\alt_route.png"

const Route = ({ routeName, eta }) => {
    <View className = "w-5/6 flex flex-row text-white ">
        <View>
            
        </View>
        <View className = "text-xl">
            <Text className = "">
                {routeName}
            </Text>
        </View>
        <View className = "flex flex-col">
            <Text className = "">
                {eta}
            </Text>
            <Text className = "">
                min
            </Text>
        </View>
    </View>
}