import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import productDataProp from "../../schema/ProductData/productData.schema";
import AddToCart from "../AddToCart/AddToCart";
interface SmallProductCardProp {
  productData: productDataProp;
}

const CartItems = ({ productData }: SmallProductCardProp) => {
  return (
    <View className="flex-row border border-gray-300 rounded-3xl p-2 px-3">
      <View className="justify-center">
        <Text className="text-orange-500 font-semibold mx-2">2 x</Text>
      </View>
      <View className="flex-1 flex-row items-center  justify-between gap-2 ">
        <View>
          <Image
            source={{
              uri: productData.image,
            }}
            resizeMode="cover"
            className="h-14 w-14  rounded-full"
          />
        </View>
        <View className="flex-1 flex-row justify-between">
          <Text className="text-base font-semibold text-black">
            {productData.name}
          </Text>
          <Text className="text-base font-semibold text-black">
            $ {productData.price}
          </Text>
        </View>
      </View>
      <View className=" justify-center ml-3 flex-row items-center gap-3">
        <TouchableOpacity className="bg-orange-400  rounded-full justify-center items-center w-8 h-8">
          <Text className="text-base text-white  text-center font-bold">-</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-400  rounded-full justify-center items-center w-8 h-8">
          <Text className="text-base text-white  text-center font-bold">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItems;
