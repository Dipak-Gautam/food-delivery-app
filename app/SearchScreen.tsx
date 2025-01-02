import { useRouter } from "expo-router";
import React, { Children, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SmallProductCard from "../src/Components/ProductCard/SmallProductCard";
import CatogeryMenu from "../src/Components/HomeComponents/CatogeryMenu";
import SearhFilter from "../src/Components/FilterComponents/SearhFilter";
import DescriptionModal from "../src/Components/Description/DescriptionModal";
import { useSearchParams } from "expo-router/build/hooks";
import productDataProp from "../src/schema/ProductData/productData.schema";
import { useSelector } from "react-redux";
import { IStore } from "../src/schema/Store/mainStore.schema";
import filterByCategory from "../src/InitialRenderFunctions/catogeryFunction";
import * as Animatable from "react-native-animatable";
import searchFunction from "../src/InitialRenderFunctions/searchFunction";

const categoryValue: Record<string, number> = {
  All: 0,
  "Fast-food": 1,
  Sweets: 2,
  Drinks: 3,
  Spicy: 4,
};

const data: Record<string, string> = {
  All: "All",
  "Fast-food": "Fast Food",
  Sweets: "Sweets",
  Drinks: "Drinks",
  Spicy: "Hot And Spicy",
};

const SearchScreen = () => {
  let value = 0;
  const allProduct = useSelector((store: IStore) => store.product);
  const searchParams = useSearchParams();
  let category = searchParams.get("category");
  const keyBoard = searchParams.get("keyBoard");
  const router = useRouter();
  const [showModal, setModal] = useState(false);
  const [showData, setShowData] = useState<productDataProp[] | null>(null);
  const productDataRef = useRef<productDataProp>({
    category: "",
    description: "",
    image: "",
    ingredients: [""],
    name: "",
    popularity: 0,
    price: 0,
    rating: "",
    _id: "",
  });
  const cartData = useSelector((store: IStore) => store.cart);

  const [search, setSearch] = useState("");
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (category == null || category == "All") {
      setShowData(allProduct);
      return;
    }
    setShowData(filterByCategory(allProduct, category));
  }, [category]);

  useEffect(() => {
    if (search == "") {
      return;
    }
    category = "All";
    const delayDebounceFn = setTimeout(() => {
      setShowData(searchFunction(allProduct, search));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    if (keyBoard == "open") {
      const timeout = setTimeout(() => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, []);
  if (category != null) value = categoryValue[category];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 " showsVerticalScrollIndicator={false}>
        <View className=" flex  flex-row w-full gap-2 mt-3">
          <TouchableOpacity
            className="justify-center "
            onPress={() => router.replace("/(tabs)/Home")}
          >
            <Ionicons color={"gray"} size={22} name="chevron-back" />
          </TouchableOpacity>
          <View className="flex-1">
            <View className=" relative border border-gray-300 rounded-2xl p-1 px-3 flex-1 flex-row  items-center">
              <View className="absolute left-2">
                <AntDesign name="search1" color={"gray"} size={17} />
              </View>

              <TextInput
                ref={textInputRef}
                className=" h-9 p-0 m-0 flex-1 pl-5 text-black text-sm"
                onChangeText={setSearch}
              />
            </View>
          </View>
          <TouchableOpacity
            className="w-11 h-11  rounded-full flex justify-center items-center p-1 bg-orange-500 relative"
            onPress={() => router.navigate("/(tabs)/Cart")}
          >
            <FontAwesome name="shopping-cart" size={17} color="white" />
            {cartData.length != 0 && (
              <Text className="absolute text-white top-1 right-2 text-xs">
                {cartData.length}
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <CatogeryMenu search={search} value={value} />
        <View>
          <SearhFilter
            title={`${category != null && data[category]}`}
            setShowData={setShowData}
            category={category}
            products={showData}
          />
        </View>
        <View className="">
          {showData?.map((item: productDataProp, index: number) => (
            <TouchableOpacity
              key={item._id}
              onPress={() => {
                (productDataRef.current = item), setModal(true);
              }}
            >
              <Animatable.View
                animation={"fadeIn"}
                duration={(index + 1) * 100}
              >
                <SmallProductCard productData={item} />
              </Animatable.View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <DescriptionModal
        visible={showModal}
        setModal={setModal}
        productData={productDataRef.current}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
