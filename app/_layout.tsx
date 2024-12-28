import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Provider } from "react-redux";
import foodStore from "../src/Store";

NavigationBar.setBackgroundColorAsync("#ffffff");
const RootLayout = () => {
  const prevLogin = false;
  const router = useRouter();
  useEffect(() => {
    if (prevLogin) {
      router.replace("/Login");
    } else {
      router.replace("/(tabs)/Home");
    }
  }, [prevLogin, router]);
  return (
    <Provider store={foodStore}>
      <SafeAreaProvider>
        <StatusBar style="auto" />

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="Login"
            options={{
              headerTitle: "Login",
            }}
          />
          <Stack.Screen name="CreateAccount/UserAddress" />
          <Stack.Screen name="CreateAccount/UserInfo" />
          <Stack.Screen name="CreateAccount/UserSignup" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="SearchScreen" />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
};

export default RootLayout;
