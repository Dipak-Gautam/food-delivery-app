import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center px-4">
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
