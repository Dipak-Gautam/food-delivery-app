import React from "react";
import catogeryAssets from "../../../assets/Catogeries/catogeryAsset";
import { Image, Text, View } from "react-native";

const Banner = () => {
  return (
    <View className="   my-2 rounded-2xl p-2 px-4 bg-[#fde5d4] flex-row items-center justify-between mx-4">
      <View>
        <Image source={catogeryAssets.delivery} className="h-12 w-12" />
      </View>
      <View>
        <Text className="text-base font-medium text-gray-800">
          Delivery in 20-30 minutes
        </Text>
      </View>
    </View>
  );
};

export default Banner;
