import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BigProductCard from "../ProductCard/BigProductCard";
import heroDataProp from "../../schema/HeroCard/heroData.schema";
import productDataProp from "../../schema/ProductData/productData.schema";
import { useRouter } from "expo-router";

interface HeroCardProp {
  heroData: heroDataProp;
}

const HeroCard = ({ heroData }: HeroCardProp) => {
  const router = useRouter();
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
        <TouchableOpacity onPress={() => router.push("/SearchScreen")}>
          <Text className="text-orange-500 font-semibold">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className=" flex-row gap-6" horizontal>
        {heroData.productData.map((item: productDataProp, index: number) => (
          <BigProductCard productData={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HeroCard;
