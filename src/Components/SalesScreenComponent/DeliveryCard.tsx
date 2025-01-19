import React from "react";
import { Text, View } from "react-native";
import { IDeliveryData } from "../../schema/Delivery/deliveryData.schema";

interface DeliveryCardProp {
  data: IDeliveryData;
}

const DeliveryCard = ({ data }: DeliveryCardProp) => {
  return (
    <View className="border  rounded-xl flex-row justify-between p-2 px-3 my-2">
      <View className="gap-1 justify-between">
        <View className="flex-row ">
          <Text className="text-base text-black font-medium">
            Delivered by :{" "}
          </Text>
          <Text className="text-base text-black font-medium">
            {data.deliveredBy}
          </Text>
        </View>
        <View className="flex-row">
          <Text className="text-sm text-slate-700 font-medium">
            Customer :{" "}
          </Text>
          <Text className="text-sm text-slate-700font-medium">
            {data.orderedBy}
          </Text>
        </View>
      </View>
      <View className="">
        <View className=" ">
          <Text className="text-base text-black font-medium text-right">
            $ {data.price}
          </Text>
        </View>
        <View className="">
          <Text className="text-xs text-slate-700font-medium text-right">
            {data.paymentMethod}
          </Text>
        </View>
        <View className="">
          <Text className="text-[8px] text-slate-700font-medium text-right">
            {data.createdAt.slice(0, 10)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryCard;
