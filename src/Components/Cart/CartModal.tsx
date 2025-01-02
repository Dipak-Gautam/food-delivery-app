import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../schema/Store/mainStore.schema";
import SecureFetch from "../../ApiServices/SecureFetch";
import { mainEndpoint } from "../../ApiServices/endpoints";
import { cartAction, messageAction } from "../../Store";
import generateOTP from "../../InitialRenderFunctions/otpGenerate";
import DropDown, { IData } from "../DropDown/DropDown";

const data: IData[] = [
  { label: "Card", value: "Card" },
  { label: "Credit", value: "Credit" },
  { label: "Cash ", value: "Cash" },
];

interface CartModalProp {
  visible: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  setSuccessModal: Dispatch<SetStateAction<boolean>>;
  items: string[];
  total: number;
}

const pickUp = {
  address: "Tal chock",
  city: "Pokhara",
  state: "Gandaki",
  zipCode: "001",
  deliveryInstructions: "Yarsha Kitchen",
};

const CartModal = ({
  visible,
  setModal,
  items,
  total,
  setSuccessModal,
}: CartModalProp) => {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [submmiting, isSubmmiting] = useState(false);
  const userData = useSelector((store: IStore) => store.user);
  const loginToken = useSelector((store: IStore) => store.loginToken);
  const dispatch = useDispatch();
  const otp = useRef("");

  const handlePrceseed = async () => {
    otp.current = generateOTP();
    isSubmmiting(true);
    const formData = {
      pickup: pickUp,
      dropLocation: {
        address: userData.address,
        city: userData.city,
        state: userData.state,
        deliveryInstructions:
          userData.deliveryInstructions && userData.deliveryInstructions,
      },
      customerName: userData.name,
      phoneNumber: userData.mobile,
      items: items,
      price: total,
      otpCode: otp.current,
      paymentMethod: "cash on delivery",
    };
    console.log("form data", userData.deliveryInstructions);
    const request = await SecureFetch({
      url: `${mainEndpoint}/order/add`,
      header: {
        "content-type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const response = await request.json();
    if (request.status == 200) {
      dispatch(messageAction.addMessage(otp.current));
      dispatch(cartAction.clearCart());
    }
    isSubmmiting(false);
    setModal(false);
    setSuccessModal(true);
  };

  return (
    <Modal
      className="flex-1 "
      statusBarTranslucent={true}
      visible={visible}
      transparent={true}
    >
      <View className="flex-1 bg-black/50">
        <SafeAreaView className="flex-1">
          <TouchableOpacity
            className="flex-1 justify-center   items-center"
            onPress={() => setModal(false)}
          >
            <View className="w-[80%]">
              <View className=" bg-orange-400 rounded-full p-2 mb-2 w-9">
                <Ionicons name="arrow-back-outline" size={16} color={"white"} />
              </View>
            </View>
            <Pressable className="w-[80%] bg-white rounded-2xl p-3 px-4">
              <View>
                <Text className="text-center text-black text-xl font-bold">
                  OverView
                </Text>
                <Text className=" text-xs text-gray-500 text-center">
                  please confirm your order before procceding
                </Text>
              </View>
              <View className="mt-2 max-h-[50%] ">
                <Text className="text-lg font-medium underline text-black  text-center w-full">
                  Your Items
                </Text>
                <FlatList
                  data={items}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View className="flex-row items-center px-4">
                      <Text className="text-black text-lg mr-2">•</Text>
                      <Text className="text-sm text-gray-800">{item}</Text>
                    </View>
                  )}
                />
              </View>
              <View className="flex-row mt-3 mx-1">
                <Text className="text-black w-32 ">Delevery Charge</Text>
                <Text className="mr-2">:</Text>
                <Text>$ 12</Text>
              </View>
              <View className="flex-row my-1 mx-1">
                <Text className="text-black w-32 font-semibold">Total </Text>
                <Text className="mr-2 font-semibold">:</Text>
                <Text className="font-semibold">$ {total}</Text>
              </View>
              <View className="flex-row">
                <View className="flex-row">
                  <Text className="text-black w-32 font-semibold">
                    Payment{" "}
                  </Text>
                  <Text className="mr-2 font-semibold">:</Text>
                </View>
                <View className="flex-1 mr-10">
                  <DropDown
                    value={paymentMethod}
                    setValue={setPaymentMethod}
                    data={data}
                  />
                </View>
              </View>
              <TouchableOpacity
                className={`p-2 ${
                  submmiting ? "bg-[#7d6b46]  " : "bg-orange-400"
                }  rounded-3xl my-3 `}
                onPress={() => handlePrceseed()}
                disabled={submmiting && true}
              >
                <Text className="text-base text-white text-center font-bold">
                  Proceed
                </Text>
              </TouchableOpacity>
            </Pressable>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default CartModal;
