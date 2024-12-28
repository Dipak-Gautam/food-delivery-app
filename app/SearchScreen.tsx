import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SmallProductCard from "../src/Components/ProductCard/SmallProductCard";
import CatogeryMenu from "../src/Components/HomeComponents/CatogeryMenu";
import SearhFilter from "../src/Components/FilterComponents/SearhFilter";
import DescriptionModal from "../src/Components/Description/DescriptionModal";

const SearchScreen = () => {
  const router = useRouter();
  const [showModal, setModal] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4">
        <View className=" flex  flex-row w-full gap-2 mt-3">
          <TouchableOpacity
            className="justify-center"
            onPress={() => router.back()}
          >
            <Ionicons color={"gray"} size={22} name="chevron-back" />
          </TouchableOpacity>
          <View className="flex-1">
            <View className="border border-gray-300 rounded-2xl p-3  flex-1">
              <AntDesign name="search1" color={"gray"} size={17} />
            </View>
          </View>
          <View className="w-11 h-11  rounded-full flex justify-center items-center p-1 bg-orange-500">
            <FontAwesome name="shopping-cart" size={17} color="white" />
          </View>
        </View>
        <CatogeryMenu />
        <View>
          <SearhFilter title="All" />
        </View>
        <View className="">
          <TouchableOpacity onPress={() => setModal(true)}>
            <SmallProductCard
              productData={{
                image:
                  "https://th.bing.com/th/id/OIP.J2bgpggkTJYwD3z8XRrt1QHaEP?w=626&h=358&rs=1&pid=ImgDetMain",
                name: "Big-Mac",
                rating: "4",
                category: "Fast-Food",
                popularity: 102,
                price: 300,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <DescriptionModal
        visible={showModal}
        setModal={setModal}
        productData={{
          image:
            "https://th.bing.com/th/id/OIP.J2bgpggkTJYwD3z8XRrt1QHaEP?w=626&h=358&rs=1&pid=ImgDetMain",
          name: "Big-Mac",
          rating: "4",
          category: "Fast-Food",
          popularity: 102,
          price: 300,
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
