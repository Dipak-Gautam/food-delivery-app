import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    await AsyncStorage.removeItem("Token");
    router.replace("/Login");
  };
  return (
    <View>
      <Text>Hello from Settings</Text>
      <TouchableOpacity
        className="p-2 bg-yellow-300"
        onPress={() => handleLogOut()}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
