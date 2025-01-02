import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DropDown, { IData } from "../DropDown/DropDown";
import AntDesign from "@expo/vector-icons/AntDesign";
import productDataProp from "../../schema/ProductData/productData.schema";
import filterByCategory from "../../InitialRenderFunctions/catogeryFunction";
interface SearhFilterProp {
  title: string;
  setShowData: React.Dispatch<React.SetStateAction<productDataProp[] | null>>;
  category: string | null;
  products: productDataProp[] | null;
}
const data: IData[] = [
  { label: "Rating", value: "rating" },
  { label: "Popularity", value: "popularity" },
  { label: "Price", value: "price" },
];

const SearhFilter = ({
  title,
  setShowData,
  products,
  category,
}: SearhFilterProp) => {
  const [value, setValue] = useState<"rating" | "price" | "popularity">(
    "rating"
  );
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (products == null || category == null) return;
    const temp = filterByCategory(products, category, value);
    setShowData(temp);
  }, [value]);

  return (
    <View className="my-2 flex-row justify-between ">
      <View>
        <Text className="text-black font-bold text-xl mx-2">{title}</Text>
      </View>
      <View className="flex-row gap-2">
        <View className="w-32 flex">
          <DropDown value={value} setValue={setValue} data={data} />
        </View>
        {/* <TouchableOpacity className="justify-center items-center  px-2 rounded-lg bg-[#f5f5f5]">
          <AntDesign name="arrowdown" size={17} color={"gray"} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SearhFilter;
