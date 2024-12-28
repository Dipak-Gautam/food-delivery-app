import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DropDown from "../DropDown/DropDown";
import AntDesign from "@expo/vector-icons/AntDesign";
interface SearhFilterProp {
  title: string;
}

const SearhFilter = ({ title }: SearhFilterProp) => {
  const [value, setValue] = useState("Hello");

  return (
    <View className="my-2 flex-row justify-between">
      <View>
        <Text className="text-black font-bold text-xl mx-2">{title}</Text>
      </View>
      <View className="flex-row gap-2">
        <View className="w-24 flex">
          <DropDown value={value} setValue={setValue} />
        </View>
        {/* <TouchableOpacity className="justify-center items-center  px-2 rounded-lg bg-[#f5f5f5]">
          <AntDesign name="arrowdown" size={17} color={"gray"} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SearhFilter;
