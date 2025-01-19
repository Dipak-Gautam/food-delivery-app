import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import getallDelivery from "../../src/ApiServices/functions/getAllDelivery.api";
import { IDeliveryData } from "../../src/schema/Delivery/deliveryData.schema";
import { Entypo } from "@expo/vector-icons";
import SalesScreen from "../../src/Components/SalesScreenComponent/SalesScreen";

const SalesDetail = () => {
  const [deliveryData, setDeliveryData] = useState<IDeliveryData[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((store: IStore) => store.loginToken);
  useEffect(() => {
    getallDelivery(token, setDeliveryData, setLoading);
  }, []);

  return (
    <View className="flex-1 bg-white px-4 py-2">
      {loading ? (
        <View className="flex-1  justify-center items-center">
          <ActivityIndicator size={30} color={"orange"} />
        </View>
      ) : (
        <>
          {deliveryData.length == 0 ? (
            <View className="flex-1 justify-center items-center">
              <View className="items-center text-center   w-[70%]">
                <Entypo name="emoji-sad" size={60} />
                <Text className="text-sm text-center mt-7 ">
                  Sorry!, Some thing went wrong.
                </Text>
                <Text className="text-sm text-center  ">Please try again</Text>
              </View>
            </View>
          ) : (
            <SalesScreen deliveryData={deliveryData} />
          )}
        </>
      )}
    </View>
  );
};

export default SalesDetail;
