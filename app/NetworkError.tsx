import React from "react";
import { Text, View } from "react-native";

const NetworkError = () => {
  return (
    <View className="flex-1 justify-center items-center px-5 bg-white">
      <View className="gap-3">
        <Text className="text-2xl font-bold text-center">
          Network Connection Error !
        </Text>
        <Text className="text-center text-xs mx-7">
          We ae having problems with our backend services or we do not have any
          product listings.
        </Text>
        <Text className="text-sm  text-center">Please try again later</Text>
      </View>
    </View>
  );
};

export default NetworkError;
