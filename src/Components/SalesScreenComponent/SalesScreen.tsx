import React from "react";
import { FlatList, Text, View } from "react-native";
import { IDeliveryData } from "../../schema/Delivery/deliveryData.schema";
import DeliveryCard from "./DeliveryCard";

interface SalesScreenProp {
  deliveryData: IDeliveryData[];
}

const SalesScreen = ({ deliveryData }: SalesScreenProp) => {
  return (
    <View className="flex-1 mt-3">
      <View className="flex-row gap-4">
        <View className="border border-gray-300  shadow-lg shadow-black/50 flex-1 p-2 rounded-xl bg-orange-500">
          <Text className="text-white text-sm font-semibold">
            Total Sales :
          </Text>
          <Text className="text-white text-xl font-semibold text-center">
            ${" "}
            {deliveryData.reduce(
              (total, item) => total + parseFloat(item.price),
              0
            )}
          </Text>
        </View>
        <View className="border border-gray-300  shadow-lg shadow-black/50 flex-1 p-2 rounded-xl bg-white ">
          <Text className="text-black text-sm font-semibold">
            Total Deliveries :
          </Text>
          <Text className="text-black text-xl font-semibold text-center">
            {deliveryData.length}
          </Text>
        </View>
      </View>
      <View className="my-4">
        <Text className="text-black font-bold text-lg">Deliveries</Text>
        <Text className="text-gray-600 text-sm">
          View all deliveries details
        </Text>
      </View>
      <View className="flex-1">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={deliveryData}
          renderItem={({ item }) => <DeliveryCard data={item} />}
        />
      </View>
    </View>
  );
};

export default SalesScreen;
