import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface componentProp {
  setModal: React.Dispatch<SetStateAction<boolean>>;
  message: string;
}

const ResponseComponent = ({ setModal, message }: componentProp) => {
  return (
    <View className=" absolute w-[100vw] h-[90vh]  flex justify-center items-center">
      <View className="w-[80%] border border-gray-400 p-5 bg-white rounded-2xl shadow-2xl shadow-black gap-3">
        <View className="justify-center items-center flex-row gap-3">
          <AntDesign name="checkcircle" size={25} color={"green"} />
          <Text className="font-bold text-black text-xl">Success</Text>
        </View>
        <View className="mt-3">
          <Text className="text-center text-base font-medium">{message}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModal(false), router.back();
          }}
        >
          <Text
            className={`w-full p-2 text-center rounded-xl bg-[#ffb727]  text-white font-semibold mt-4`}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResponseComponent;
