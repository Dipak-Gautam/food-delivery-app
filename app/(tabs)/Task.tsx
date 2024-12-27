import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Task = () => {
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center px-4">
      <Text>Hello from home</Text>
    </SafeAreaView>
  );
};

export default Task;
