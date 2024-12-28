import React from "react";
import { Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AddToCart from "../AddToCart/AddToCart";
import productDataProp from "../../schema/ProductData/productData.schema";

interface BigProductCardProp {
  productData: productDataProp;
}

const BigProductCard = ({ productData }: BigProductCardProp) => {
  return (
    <View className="border w-72 h-60 rounded-3xl border-gray-300 shadow-xl bg-white overflow-hidden">
      <View className="overflow-hidden ">
        <Image
          source={{
            uri: productData.image,
          }}
          resizeMode="cover"
          className="h-32 w-72"
        />
      </View>
      <View className="mx-3 mt-2 justify-between flex-row">
        <View>
          <View>
            <Text className="text-black font-bold text-xl">
              {productData.name}
            </Text>
          </View>
          <View className="flex-row gap-2  items-center mt-1">
            <View className="flex-row  gap-2 items-center ">
              <FontAwesome name="star" color={"#f1d054"} size={20} />
              <Text className="text-sm">{productData.rating}</Text>
            </View>
            <View>
              <Text className="text-gray-500 text-xs mt-1">
                #{productData.category}
              </Text>
            </View>
          </View>
          <View>
            <Text className="text-sm text-black">
              (
              <Text className="text-black font-semibold">
                {productData.popularity}
              </Text>
              +orders)
            </Text>
          </View>
        </View>
        <View className="flex justify-between">
          <Text className="text-xl text-orange-500 font-semibold text-right ">
            $ {productData.price}
          </Text>
          <View className="">
            <AddToCart />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BigProductCard;
