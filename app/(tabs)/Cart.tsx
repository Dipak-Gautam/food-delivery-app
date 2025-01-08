import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../../src/Components/Cart/Banner";
import CartItems from "../../src/Components/Cart/CartItems";
import { ICartData } from "../../src/schema/Store/cartData.schema";
import calculateCart from "../../src/InitialRenderFunctions/calculateCart";
import CartModal from "../../src/Components/Cart/CartModal";
import getProductNames from "../../src/InitialRenderFunctions/getProductName";
import OrderSuccessModal from "../../src/Components/Cart/OrderSuccessModal";

const Cart = () => {
  const cartData = useSelector((store: IStore) => store.cart);
  const [showModal, setmodal] = useState(false);
  const [successModal, setSuccessmodal] = useState(false);

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View className="mt-1">
        <Text className="text-black text-2xl font-bold text-center ">
          Your Cart
        </Text>
      </View>
      <Banner />
      <ScrollView className="px-4 my-3 " showsVerticalScrollIndicator={false}>
        {cartData.map((item: ICartData) => (
          <CartItems
            productData={item.data}
            quantity={item.quantity}
            key={item.data._id}
          />
        ))}
      </ScrollView>
      <View className="p-4 bg-[#fde5d4] rounded-t-3xl">
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Text>Subtotal</Text>
            <Text>
              $<Text>{calculateCart(cartData)}</Text>
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
              $<Text>{calculateCart(cartData) + 12}</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          disabled={cartData.length == 0 && true}
          className={`p-2 ${
            cartData.length == 0 ? "bg-[#a18e69]" : "bg-orange-400"
          }  rounded-3xl my-3 `}
          onPress={() => setmodal(true)}
        >
          <Text className="text-xl text-white text-center font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
      <CartModal
        visible={showModal}
        setModal={setmodal}
        items={getProductNames(cartData)}
        total={calculateCart(cartData) + 12}
        setSuccessModal={setSuccessmodal}
      />
      <OrderSuccessModal visible={successModal} setModal={setSuccessmodal} />
    </SafeAreaView>
  );
};

export default Cart;
