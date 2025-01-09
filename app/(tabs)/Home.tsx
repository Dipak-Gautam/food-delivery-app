import { useFocusEffect, useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Alert,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import CatogeryMenu from "../../src/Components/HomeComponents/CatogeryMenu";
import HeroCard from "../../src/Components/HomeComponents/HeroCard";
import filterByCategory from "../../src/InitialRenderFunctions/catogeryFunction";
import { useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const router = useRouter();
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
  const allData = useSelector((store: IStore) => store.product);

  return (
    <SafeAreaView className="bg-white flex-1  ">
      <StatusBar style="dark" />
      <ScrollView
        className="flex-1 px-4 bg-white"
        showsVerticalScrollIndicator={false}
      >
        <View className=" flex  flex-row w-full gap-2 mt-3">
          <View className="flex-1">
            <TouchableOpacity
              className="border border-gray-300 rounded-2xl p-3  flex-1"
              onPress={() =>
                router.push({
                  pathname: "/SearchScreen",
                  params: { keyBoard: "open", category: "All" },
                })
              }
            >
              <AntDesign name="search1" color={"gray"} size={17} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="w-11 h-11  rounded-full flex justify-center items-center p-1 bg-orange-500"
            onPress={() => router.navigate("(tabs)/Settings")}
          >
            <Feather name="sliders" size={17} color="white" />
          </TouchableOpacity>
        </View>
        <CatogeryMenu value={0} />
        <HeroCard
          cardTitle="Fast Food"
          cardDescription="Local fast food corners"
          productData={filterByCategory(allData, "Fast-food")}
          category="Fast-food"
        />
        <HeroCard
          cardTitle="Sweets"
          cardDescription="Sweets near you"
          productData={filterByCategory(allData, "Sweets")}
          category="Sweets"
        />
        <HeroCard
          cardTitle="Drinks"
          cardDescription="Hot and Cold Drinks"
          productData={filterByCategory(allData, "Drinks")}
          category="Drinks"
        />
        <HeroCard
          cardTitle="Hot and Spicy"
          cardDescription="Hot and Spicy foods"
          productData={filterByCategory(allData, "Spicy")}
          category="Spicy"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
