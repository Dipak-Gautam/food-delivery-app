import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Messages = () => {
  return (
    <SafeAreaView className="flex flex-1 px-4 justify-center items-center">
      <Text>HEllo from messages</Text>
    </SafeAreaView>
  );
};

export default Messages;
