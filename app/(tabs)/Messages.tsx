import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import catogeryAssets from "../../assets/Catogeries/catogeryAsset";

const Messages = () => {
  const message = useSelector((store: IStore) => store.message);
  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <View className="mt-1">
        <Text className="text-black text-2xl font-bold text-center ">
          Notifications
        </Text>
      </View>
      <View className="justify-center text-center border border-gray-200 p-3 rounded-2xl mt-4 shadow-xl shadow-gray-600 mx-5 my-1    bg-[#fbe3cf]">
        <Text className="text-center font-semibold">Happy New Year 2025!</Text>
        <Text className="text-center text-sm mt-1 text-gray-700 ">
          On this New year, Get 25% off on all products
        </Text>
      </View>

      <ScrollView className="flex-1">
        {message.map((item) => (
          <View
            key={item}
            className="justify-between text-center border border-gray-200 p-3 rounded-2xl mt-4 shadow-xl shadow-gray-600 mx-5 my-1    bg-[#fefdfd] flex-row gap-2"
          >
            <View>
              <Image
                source={catogeryAssets.deliveryMan}
                className="h-12 w-14"
              />
            </View>
            <View className="flex-1">
              <Text className="text-center font-semibold text-lg">{item}</Text>
              <Text className="text-center text-sm  text-gray-700 ">
                the OTP for your order delevery is{" "}
                <Text className="font-medium">{item}</Text>
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
