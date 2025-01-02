import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Provider } from "react-redux";
import foodStore from "../src/Store";

NavigationBar.setBackgroundColorAsync("#ffffff");
const RootLayout = () => {
  return (
    <Provider store={foodStore}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateAccount/UserAddress"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateAccount/UserInfo"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateAccount/UserSignup"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SearchScreen"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SettingNav/ChangePassword"
            options={{
              title: "Setting",
            }}
          />
          <Stack.Screen
            name="SettingNav/UpdateProfile"
            options={{
              title: "Setting",
            }}
          />
          <Stack.Screen
            name="Admin/AddProduct"
            options={{
              title: "Add Product",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
};

export default RootLayout;
