import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../src/Store";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import { SafeAreaView } from "react-native-safe-area-context";
import catogeryAssets from "../../assets/Catogeries/catogeryAsset";
import Banner from "../../src/Components/Cart/Banner";
import CartItems from "../../src/Components/Cart/CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store: IStore) => store.cart);

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View className="mt-1">
        <Text className="text-black text-2xl font-bold text-center ">
          Your Cart
        </Text>
      </View>
      <Banner />
      <ScrollView className="px-4 my-3 ">
        <CartItems
          productData={{
            image:
              "https://th.bing.com/th/id/OIP.J2bgpggkTJYwD3z8XRrt1QHaEP?w=626&h=358&rs=1&pid=ImgDetMain",
            name: "Big-Mac",
            rating: "4",
            category: "Fast-Food",
            popularity: 102,
            price: 300,
          }}
        />
      </ScrollView>
      <View className="p-4 bg-[#fde5d4] rounded-t-3xl">
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Text>Subtotal</Text>
            <Text>
              $<Text>123</Text>
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Delevery Fee</Text>
            <Text>
              $<Text>12</Text>
            </Text>
          </View>
          <View className="flex-row justify-between font-bold">
            <Text className="font-bold">Order Total</Text>
            <Text className="font-bold">
              $<Text>123</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity className=" p-2 bg-orange-400 rounded-3xl my-3 ">
          <Text className="text-xl text-white text-center font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
