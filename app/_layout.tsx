import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

NavigationBar.setBackgroundColorAsync("#ffffff");
const RootLayout = () => {
  const prevLogin = true;
  const router = useRouter();
  useEffect(() => {
    if (prevLogin) {
      router.replace("/Login");
    } else {
      router.replace("/CreateAccount");
    }
  }, [prevLogin, router]);
  return (
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
        <Stack.Screen
          name="CreateAccount"
          options={{
            headerTitle: "Create Account",
          }}
        />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
