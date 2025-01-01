import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store";
import productDataProp from "../../schema/ProductData/productData.schema";

interface AddToCartProp {
  product: productDataProp;
}

const AddToCart = ({ product }: AddToCartProp) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const addItem = () => {
    setQuantity(quantity + 1);
    dispatch(cartAction.addItemCart(product));
  };

  const removeItem = () => {
    setQuantity(quantity - 1);
    dispatch(cartAction.removeItemCart(product));
  };

  return (
    <View>
      {quantity == 0 ? (
        <TouchableOpacity
          className=" rounded-2xl px-3 py-2 bg-orange-500 w-24"
          onPress={() => addItem()}
        >
          <Text className="text-white text-sm">Add to cart</Text>
        </TouchableOpacity>
      ) : (
        <View className=" rounded-2xl  w-24 flex-row justify-between">
          <TouchableOpacity
            className="w-[35%] flex justify-center items-center bg-orange-500 rounded-full"
            onPress={() => removeItem()}
          >
            <Text className="text-white text-[15px] py-1 font-extrabold">
              -
            </Text>
          </TouchableOpacity>
          <View className="bg-white flex-1 justify-center items-center">
            <Text className="text-center">{quantity}</Text>
          </View>
          <TouchableOpacity
            className="w-[35%] flex justify-center items-center bg-orange-500 rounded-full"
            onPress={() => addItem()}
          >
            <Text className="text-white text-[15px] py-1 font-extrabold ">
              +
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddToCart;
