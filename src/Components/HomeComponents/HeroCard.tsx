import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BigProductCard from "../ProductCard/BigProductCard";
import heroDataProp from "../../schema/HeroCard/heroData.schema";

interface HeroCardProp {
  heroData: heroDataProp;
}

const HeroCard = ({ heroData }: HeroCardProp) => {
  return (
    <View className="flex  mt-2 mb-4 ">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-black font-bold text-xl">
            {heroData.cardTitle}
          </Text>
          <Text className="text-gray-600 text-xs">
            {heroData.cardDescription}
          </Text>
        </View>
        <TouchableOpacity>
          <Text className="text-orange-500 font-semibold">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3">
        <BigProductCard productData={heroData.productData[0]} />
      </View>
    </View>
  );
};

export default HeroCard;
