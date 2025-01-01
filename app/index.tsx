import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginTokenAction } from "../src/Store";
import getallProduct from "../src/ApiServices/functions/getAllproduct.api";
import getUser from "../src/ApiServices/functions/getUserData.api";

const index = () => {
  const dispatch = useDispatch();
  const getLocalData = async () => {
    const Token = await AsyncStorage.getItem("Token");
    const firstLogin = await AsyncStorage.getItem("FirstLogin");
    if (Token !== null) {
      router.navigate("/(tabs)/Home");
      getallProduct(Token, dispatch);
      getUser(Token, dispatch);
      dispatch(loginTokenAction.addToken(Token));
    } else {
      if (firstLogin == null || firstLogin == "true") {
        router.replace("/CreateAccount/UserInfo");
      } else {
        router.replace("/Login");
      }
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center px-4">
      <StatusBar style="auto" />
      <View>
        <Text>hello</Text>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("/Login")}
        className="p-3 bg-red-400 m-2"
      >
        <Text>go to next page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
