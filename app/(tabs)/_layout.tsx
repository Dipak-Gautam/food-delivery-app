import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import foodStore from "../../src/Store";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff7a00",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerShown: false,
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome size={27} name="wechat" color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
