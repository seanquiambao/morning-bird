import * as Location from "expo-location";

const getCoordinates = async (city: string) => {
  try {
    const location = await Location.geocodeAsync(city);
    if (location.length <= 0) {
      throw Error("Location not found");
    }
    const { longitude, latitude } = location[0];

    return { longitude: longitude, latitude: latitude };
  } catch (error) {
    console.error(error);
  }
};
