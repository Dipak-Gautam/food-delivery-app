import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import SecureFetch from "../../src/ApiServices/SecureFetch";
import { userEndPoint } from "../../src/ApiServices/endpoints";
import { userAction } from "../../src/Store";
import TextInputControllers from "../../src/Components/Controllers/TextInputControllers";

const updateProfileSchema = z.object({
  name: z.string().min(2, "Name must be min 2 character long"),
  phoneNumber: z.string().min(10, "Please provide a valid Number"),
  city: z.string().min(2, "Name must beat at least 2 character long"),
  state: z.string(),
  zipCode: z.string(),
  deliveryInstructions: z.string().optional(),
  address: z.string().min(2, "Please provide a valid address"),
});
type updateProfileSchema = z.infer<typeof updateProfileSchema>;

const UpdateProfile = () => {
  const [showModal, setShowModal] = useState(false);
  console.log("shpow modal", showModal);

  const dispatch = useDispatch();
  const token = useSelector((store: IStore) => store.loginToken);
  const userData = useSelector((store: IStore) => store.user);
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<updateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: userData.name,
      phoneNumber: userData.mobile,
      address: userData.address,
      city: userData.city,
      state: userData.state,
      zipCode: userData.zipCode,
      deliveryInstructions: userData.deliveryInstructions,
    },
  });
  const watchedValues = watch();
  const hasChanges = Object.keys(watchedValues).some(
    (key) => dirtyFields[key as keyof updateProfileSchema]
  );
  const onSubbmit: SubmitHandler<updateProfileSchema> = async (data) => {
    setShowModal(true);
    const formdata = {
      name: data.name,
      mobile: data.phoneNumber,
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      deliveryInstructions: data.deliveryInstructions,
    };
    const request = await SecureFetch({
      url: `${userEndPoint}/profile`,
      header: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify(formdata),
    });
    const response = await request.json();
    if (request.status == 200) {
      dispatch(userAction.addData(response.data));
    } else {
      setError("root", { message: "Internal server error" });
    }
  };
  return (
    <ScrollView className="flex-1 bg-white px-4 py-4">
      <View className="gap-5 w-full">
        <View>
          <Text className="text-black text-xl font-semibold">
            Update Persional Info
          </Text>
        </View>

        <View className="">
          <TextInputControllers
            control={control}
            name="name"
            placeholder="Enter your Full Name"
            errors={errors}
          />
          <TextInputControllers
            control={control}
            name="phoneNumber"
            placeholder="Enter your Phone Number"
            errors={errors}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text className="text-black text-xl font-semibold">
            Update Address
          </Text>
        </View>

        <View className="">
          <View className="flex-row w-[100%] justify-between">
            <View className="w-[45%]">
              <TextInputControllers
                control={control}
                name="state"
                placeholder="Enter State"
                errors={errors}
              />
            </View>

            <View className="w-[45%]">
              <TextInputControllers
                control={control}
                name="zipCode"
                placeholder="Enter Zip Code"
                errors={errors}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <TextInputControllers
            control={control}
            name="city"
            placeholder="Enter your City"
            errors={errors}
          />
          <TextInputControllers
            control={control}
            name="address"
            placeholder="Enter your address"
            errors={errors}
          />
          <Controller
            name="deliveryInstructions"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="border-b p-2 rounded-lg text-base text-black"
                placeholder="Provide a delevery instruction"
                placeholderTextColor="gray"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={true}
              />
            )}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubbmit)}
          disabled={isSubmitting || !hasChanges}
        >
          <Text
            className={`w-full p-2 text-center rounded-xl ${
              isSubmitting || !hasChanges ? "bg-[#896f3d]" : "bg-[#ffb727]"
            }  text-white font-semibold mt-4`}
          >
            {isSubmitting ? <Text>Submitting...</Text> : <Text>Continue</Text>}
          </Text>
        </TouchableOpacity>
        <View className="justify-center  items-center">
          <Text className="text-red-400 text-sm ml-2 text-center">
            {errors.root?.message}
          </Text>
        </View>
      </View>
      <Modal visible={showModal} className="flex-1">
        <View className="flex-1 bg-red-500 justify-center items-center">
          <Text>Hello</Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default UpdateProfile;
