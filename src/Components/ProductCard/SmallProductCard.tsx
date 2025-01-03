import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import productDataProp from "../../schema/ProductData/productData.schema";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AddToCart from "../AddToCart/AddToCart";
import { AddProductSchema } from "../../../app/Admin/AddProduct";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { IStore } from "../../schema/Store/mainStore.schema";

interface SmallProductCardProp {
  productData: productDataProp | AddProductSchema;
}

const SmallProductCard = ({ productData }: SmallProductCardProp) => {
  const userData = useSelector((store: IStore) => store.user);
  return (
    <View className="border  border-slate-300 bg-white rounded-3xl overflow-hidden shadow-2xl my-2 flex-row gap-3">
      <View className=" flex ">
        <Image
          source={{
            uri: productData.image,
          }}
          resizeMode="cover"
          className="h-24 w-24 "
        />
      </View>
      <View className="py-1 flex-row justify-between flex-1 pr-3">
        <View className="justify-evenly">
          <Text className="text-black font-semibold text-lg">
            {productData.name}
          </Text>
          <View className="flex-row gap-3">
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
        <View className="justify-around">
          <View className="flex ">
            <Text className="text-xl text-orange-500 font-semibold text-right ">
              $ {productData.price}
            </Text>
          </View>
          <View>
            {userData.role == "admin" ? (
              <TouchableOpacity
                className="rounded-2xl px-3 py-2 bg-orange-500 w-24"
                onPress={() =>
                  router.navigate({
                    pathname: "/Admin/UpdateProduct",
                    params: { productData: JSON.stringify(productData) },
                  })
                }
              >
                <Text className="text-white text-sm text-center">Update</Text>
              </TouchableOpacity>
            ) : (
              <AddToCart product={productData} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SmallProductCard;
