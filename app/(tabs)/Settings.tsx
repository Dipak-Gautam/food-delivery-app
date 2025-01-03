import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";

const Settings = () => {
  const router = useRouter();
  const handleLogOut = () => {
    Alert.alert("Log Out", "Are you sure you want to LogOut?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: async () => {
          await AsyncStorage.removeItem("Token");
          await AsyncStorage.removeItem("messages");
          router.replace("/Login");
        },
      },
    ]);
  };
  const userData = useSelector((store: IStore) => store.user);
  const token = useSelector((store: IStore) => store.loginToken);

  return (
    <View className="bg-white flex-1 px-4 items-center">
      <View className=" h-24 w-24 rounded-full justify-center items-center mx-auto  mt-4">
        <FontAwesome name="user-circle-o" color={"gray"} size={85} />
      </View>
      <View className="my-3">
        <Text className="text-center">{userData.name}</Text>
        <Text className="text-center">{userData.mobile}</Text>
      </View>
      <View className="w-full px-2">
        <View>
          <Text className="text-lg text-gray-700">Options</Text>
        </View>
        <View className="mt-3">
          <TouchableOpacity
            className="flex-row my-2 gap-4 items-center justify-between "
            onPress={() =>
              router.navigate({
                pathname: "SettingNav/UpdateProfile",
              })
            }
          >
            <View className="w-8">
              <FontAwesome6 name="user-gear" size={23} />
            </View>
            <View className="flex-1">
              <Text className="text-base font-medium">Profile Setting</Text>
              <Text className="text-xs">Manage your profile</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} color={"black"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row my-2 gap-4 items-center justify-between "
            onPress={() => {
              router.navigate({
                pathname: "SettingNav/ChangePassword",
              });
            }}
          >
            <View className="w-8">
              <FontAwesome6 name="lock" size={23} />
            </View>
            <View className="flex-1">
              <Text className="text-base font-medium">Security</Text>
              <Text className="text-xs">Change password </Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} color={"black"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row my-2 gap-4 items-center justify-between "
            onPress={() => handleLogOut()}
          >
            <View className="w-8">
              <MaterialIcons name="logout" size={23} />
            </View>
            <View className="flex-1">
              <Text className="text-base font-medium">Logout</Text>
              <Text className="text-xs">logout from this device </Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} color={"black"} />
            </View>
          </TouchableOpacity>
        </View>
        {userData.role == "admin" && (
          <>
            <View>
              <Text className="text-lg text-gray-700 mt-4">
                Product Options
              </Text>
            </View>
            <View className="mt-3">
              <TouchableOpacity
                className="flex-row my-2 gap-4 items-center justify-between "
                onPress={() => router.navigate("Admin/AddProduct")}
              >
                <View className="w-8">
                  <FontAwesome6 name="user-gear" size={23} />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium">Add Product</Text>
                  <Text className="text-xs">
                    add product to your collection
                  </Text>
                </View>
                <View>
                  <MaterialIcons
                    name="navigate-next"
                    size={30}
                    color={"black"}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Settings;
