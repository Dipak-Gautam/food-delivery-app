import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Messages"
        options={{
          headerShown: false,
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="wechat" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Task"
        options={{
          headerShown: false,
          title: "Task",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
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
