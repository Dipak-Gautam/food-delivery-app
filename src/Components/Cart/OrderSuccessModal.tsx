import React, { Dispatch, SetStateAction, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { useSelector } from "react-redux";
import { IStore } from "../../schema/Store/mainStore.schema";

interface CartModalProp {
  visible: boolean;
  setModal: React.Dispatch<SetStateAction<boolean>>;
}

const OrderSuccessModal = ({ visible, setModal }: CartModalProp) => {
  const message = useSelector((store: IStore) => store.message);
  return (
    <Modal
      className="flex-1 "
      statusBarTranslucent={true}
      visible={visible}
      transparent={true}
    >
      <View className="flex-1 bg-black/50">
        <SafeAreaView className="flex-1">
          <TouchableOpacity
            className="flex-1 justify-center   items-center"
            onPress={() => setModal(false)}
          >
            <View className="w-[80%]">
              <View className=" bg-orange-400 rounded-full p-2 mb-2 w-9">
                <Ionicons name="arrow-back-outline" size={16} color={"white"} />
              </View>
            </View>
            <Pressable className="w-[80%] bg-white rounded-2xl p-3 px-4 ">
              <View className="justify-center items-center flex-row gap-3">
                <Octicons name="check-circle-fill" color={"green"} size={25} />
                <Text className="text-xl text-black font-bold">Success</Text>
              </View>
              <View className="my-2">
                <Text className="text-sm">
                  Your order has been successfully placed. Your delevery otp is
                  :
                </Text>
                <Text className="text-center text-lg font-semibold">
                  {message[message.length - 1]}
                </Text>
              </View>
              <TouchableOpacity
                className="p-2 bg-orange-400 rounded-3xl my-3 "
                onPress={() => setModal(false)}
              >
                <Text className="text-base text-white text-center font-bold">
                  Continue
                </Text>
              </TouchableOpacity>
            </Pressable>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default OrderSuccessModal;
