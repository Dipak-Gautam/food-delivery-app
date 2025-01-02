import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import catogeryAssets from "../../../assets/Catogeries/catogeryAsset";
import { router } from "expo-router";

const foodData: any = [
  { image: "pizza", name: "All" },
  { image: "hamburger", name: "Fast-food" },
  { image: "iceCream", name: "Sweets" },
  { image: "drinks", name: "Drinks" },
  { image: "noodle", name: "Spicy" },
];

interface CatogeryMenuProp {
  search?: string;
  value?: number | null;
}

const CatogeryMenu = ({ search, value }: CatogeryMenuProp) => {
  const [active, setActive] = useState(value ? value : 0);

  useEffect(() => {
    if (search) {
      setActive(0);
    }
  }, [search]);

  return (
    <View className=" flex-row justify-around mt-4 ">
      {foodData.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={{ alignItems: "center", marginBottom: 10 }}
          onPress={() => {
            router.push({
              pathname: "/SearchScreen",
              params: { category: item.name },
            }),
              setActive(index);
          }}
        >
          <View
            className={`border  p-2 rounded-full ${
              active == index
                ? "bg-slate-300 border border-orange-300 "
                : "bg-slate-100 border border-white"
            } `}
          >
            <Image
              source={catogeryAssets[item.image]}
              style={{ width: 28, height: 28 }}
            />
          </View>
          <Text
            className={`text-center text-xs  mt-1 ${
              active == index ? "text-black font-medium" : "text-gray-400"
            } `}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CatogeryMenu;
