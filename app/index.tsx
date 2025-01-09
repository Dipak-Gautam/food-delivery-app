import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginTokenAction, messageAction } from "../src/Store";
import getallProduct from "../src/ApiServices/functions/getAllproduct.api";
import getUser from "../src/ApiServices/functions/getUserData.api";

const index = () => {
  const dispatch = useDispatch();
  const getLocalData = async () => {
    const Token = await AsyncStorage.getItem("Token");
    const firstLogin = await AsyncStorage.getItem("FirstLogin");
    const messages = await AsyncStorage.getItem("messages");
    if (messages) {
      dispatch(messageAction.loadMessage(JSON.parse(messages)));
    }

    if (Token !== null) {
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
      <StatusBar style="dark" />
      <View>
        <ActivityIndicator color={"orange"} size={30} />
        <Text className="mt-3">Loading ...</Text>
      </View>
    </View>
  );
};

export default index;
