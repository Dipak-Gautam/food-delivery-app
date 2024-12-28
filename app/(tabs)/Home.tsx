import { router, useFocusEffect } from "expo-router";
import React, { useEffect } from "react";
import {
  Alert,
  BackHandler,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import CatogeryMenu from "../../src/Components/HomeComponents/CatogeryMenu";
import HeroCard from "../../src/Components/HomeComponents/HeroCard";
const data = {
  cardTitle: "Fast Food",
  cardDescription: "Local fast food corners",
  productData: [
    {
      image:
        "https://th.bing.com/th/id/OIP.J2bgpggkTJYwD3z8XRrt1QHaEP?w=626&h=358&rs=1&pid=ImgDetMain",
      name: "Big-Mac",
      rating: "4",
      category: "Fast-Food",
      popularity: 102,
      price: 300,
    },
  ],
};
const data2 = {
  cardTitle: "Sweets",
  cardDescription: "Local fast food corners",
  productData: [
    {
      image:
        "https://th.bing.com/th/id/OIP.J2bgpggkTJYwD3z8XRrt1QHaEP?w=626&h=358&rs=1&pid=ImgDetMain",
      name: "Big-Mac",
      rating: "4",
      category: "Fast-Food",
      popularity: 102,
      price: 300,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.J2bgpggkTJYwD3z8XRrt1QHaEP?w=626&h=358&rs=1&pid=ImgDetMain",
      name: "Big-Mac",
      rating: "4",
      category: "Fast-Food",
      popularity: 102,
      price: 300,
    },
  ],
};

const Home = () => {
  useFocusEffect(() => {
    const onBackPress = () => {
      Alert.alert("Exit App", "Are you sure you want to close the app?", [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );
  });

  return (
    <SafeAreaView className="bg-white flex-1  ">
      <ScrollView
        className="flex-1 px-4 bg-white"
        showsVerticalScrollIndicator={false}
      >
        <View className=" flex  flex-row w-full gap-2 mt-3">
          <View className="flex-1">
            <View className="border border-gray-300 rounded-2xl p-3  flex-1">
              <AntDesign name="search1" color={"gray"} size={17} />
            </View>
          </View>
          <View className="w-11 h-11  rounded-full flex justify-center items-center p-1 bg-orange-500">
            <Feather name="sliders" size={17} color="white" />
          </View>
        </View>
        <CatogeryMenu />
        <HeroCard heroData={data} />
        <HeroCard heroData={data2} />
        <HeroCard heroData={data2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;