import React from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import productDataProp from "../../schema/ProductData/productData.schema";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AddToCart from "../AddToCart/AddToCart";

interface DescriptionModalProp {
  visible: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  productData: productDataProp;
}

const DescriptionModal = ({
  visible,
  setModal,
  productData,
}: DescriptionModalProp) => {
  return (
    <Modal
      className="flex-1 "
      statusBarTranslucent={true}
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <SafeAreaView className="flex-1 ">
        <TouchableOpacity
          className="flex-1 "
          onPress={() => setModal(false)}
        ></TouchableOpacity>

        <View className=" h-[85vh] rounded-t-2xl overflow-hidden border bg-white">
          <View className="relative">
            <Image
              source={{ uri: productData.image }}
              resizeMode="cover"
              className="h-60"
            />
            <TouchableOpacity
              className="absolute bg-orange-400 rounded-full p-2 top-4 left-4"
              onPress={() => setModal(false)}
            >
              <Ionicons name="arrow-back-outline" size={16} color={"white"} />
            </TouchableOpacity>
          </View>

          <View className="py-1 flex-row justify-between  pr-3 mx-4 mt-2">
            <View className="justify-evenly">
              <Text className="text-black font-semibold text-2xl">
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
            <View className="justify-between">
              <View className="flex ">
                <Text className="text-xl text-orange-500 font-semibold text-right ">
                  $ {productData.price}
                </Text>
              </View>
              <View>
                <AddToCart product={productData} />
              </View>
            </View>
          </View>

          <View className="border-b border-black my-2" />

          <View className="px-4 ">
            <Text className="text-black text-lg  font-semibold ">
              Description
            </Text>
            <Text className="text-justify text-sm">
              {productData.description}
            </Text>
          </View>
          <View className="px-4 mt-2 ">
            <Text className="text-black text-lg  font-semibold ">
              Ingredients
            </Text>
            <FlatList
              data={productData.ingredients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View className="flex-row items-center ">
                  <Text className="text-black text-lg mr-2">•</Text>
                  <Text className="text-sm text-gray-800">{item}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DescriptionModal;
