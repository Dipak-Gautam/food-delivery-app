import React, { useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BigProductCard from "../ProductCard/BigProductCard";
import heroDataProp from "../../schema/HeroCard/heroData.schema";
import productDataProp from "../../schema/ProductData/productData.schema";
import { useRouter } from "expo-router";
import DescriptionModal from "../Description/DescriptionModal";

interface HeroCardProp {
  cardTitle: string;
  cardDescription: string;
  productData: productDataProp[];
  category: string;
}

const HeroCard = ({
  cardTitle,
  cardDescription,
  productData,
  category,
}: HeroCardProp) => {
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
  const router = useRouter();
  const [showModal, setModal] = useState(false);

  return (
    <View className="flex  mt-2 mb-3 ">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-black font-bold text-xl">{cardTitle}</Text>
          <Text className="text-gray-600 text-base">{cardDescription}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            router.navigate({
              pathname: "/SearchScreen",
              params: { category: category },
            })
          }
        >
          <Text className="text-orange-500 font-semibold">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className=" flex-row gap-6" horizontal>
        {productData.map((item: productDataProp, index: number) => (
          <TouchableOpacity
            onPress={() => {
              productDataRef.current = item;
              setModal(true);
            }}
            key={index}
          >
            <BigProductCard productData={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <DescriptionModal
        productData={productDataRef.current}
        setModal={setModal}
        visible={showModal}
      />
    </View>
  );
};

export default HeroCard;
