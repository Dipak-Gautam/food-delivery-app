import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";

const TabsLayout = () => {
  const cartData = useSelector((store: IStore) => store.cart);
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
            <FontAwesome size={27} name="wechat" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome name="shopping-cart" size={25} color={color} />
              {cartData.length != 0 && (
                <Text className="absolute text-orange-500 -top-1 -right-2 text-[10px] font-semibold">
                  {cartData.length}
                </Text>
              )}
            </View>
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
