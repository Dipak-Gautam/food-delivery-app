import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import productDataProp from "../../schema/ProductData/productData.schema";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store";

interface SmallProductCardProp {
  productData: productDataProp;
  quantity: number;
}

const CartItems = ({ productData, quantity }: SmallProductCardProp) => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartAction.addItemCart(productData));
  };

  const removeItem = () => {
    dispatch(cartAction.removeItemCart(productData));
  };
  return (
    <View className="flex-row border border-gray-300 rounded-3xl p-2 px-3 my-2">
      <View className="justify-center">
        <Text className="text-orange-500 font-semibold mx-1">{quantity} x</Text>
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
        <View className="flex-1 flex-row justify-between items-center">
          <Text className="text-base font-semibold text-black  max-w-[68%]">
            {productData.name}
          </Text>
          <Text className="text-base font-semibold text-black">
            $ {productData.price}
          </Text>
        </View>
      </View>
      <View className=" justify-center ml-3 flex-row items-center gap-3">
        <TouchableOpacity
          className="bg-orange-400  rounded-full justify-center items-center w-8 h-8"
          onPress={removeItem}
        >
          <Text className="text-base text-white  text-center font-bold">-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-orange-400  rounded-full justify-center items-center w-8 h-8"
          onPress={addItem}
        >
          <Text className="text-base text-white  text-center font-bold">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItems;
