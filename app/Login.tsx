import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../global.css";
import TextInputControllers from "../src/Components/Controllers/TextInputControllers";
import SecureFetch from "../src/ApiServices/SecureFetch";
import { userEndPoint } from "../src/ApiServices/endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getallProduct from "../src/ApiServices/functions/getAllproduct.api";
import { useDispatch } from "react-redux";
import { loginTokenAction, userAction } from "../src/Store";

const asyncStorage = async (token: string) => {
  await AsyncStorage.setItem("Token", token);
  await AsyncStorage.setItem("FirstLogin", "false");
};

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type loginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubbmit: SubmitHandler<loginSchema> = async (data) => {
    const formdata = {
      email: data.email,
      password: data.password,
    };
    const request = await SecureFetch({
      url: `${userEndPoint}/login`,
      header: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(formdata),
    });
    const response = await request.json();
    if (request.status == 200) {
      asyncStorage(response.token);
      getallProduct(response.token, dispatch);
      dispatch(userAction.addData(response.data));
      dispatch(loginTokenAction.addToken(response.token));
    } else {
      setError("root", {
        message: response.message,
      });
    }
  };

  return (
    <SafeAreaView className="flex flex-1 justify-center px-8 bg-white">
      <View className="flex-1 justify-center items-center">
        <View className="gap-8 w-full">
          <View>
            <Text className="text-5xl mb-2 text-indigo-400 font-medium">
              Welcome
            </Text>
            <Text className="text-5xl font-medium text-indigo-400">back</Text>
          </View>

          <View>
            <TextInputControllers
              control={control}
              errors={errors}
              name="email"
              placeholder="Email"
            />
            <TextInputControllers
              control={control}
              errors={errors}
              name="password"
              placeholder="Password"
            />
          </View>

          <TouchableOpacity
            onPress={handleSubmit(onSubbmit)}
            disabled={isSubmitting}
          >
            <Text
              className={`w-full p-2 text-center rounded-xl ${
                isSubmitting ? "bg-[#a18e69]" : "bg-[#ffb727]"
              }  text-white font-semibold mt-4`}
            >
              {isSubmitting ? <Text>Submitting...</Text> : <Text>Sign in</Text>}
            </Text>
          </TouchableOpacity>
          <View className="justify-center  items-center">
            <Text className="text-red-400 text-sm ml-2 text-center">
              {errors.root?.message}
            </Text>
          </View>
        </View>

        <View className="flex-row w-full justify-center items-center gap-5 mt-5">
          <View className="border-b w-16 border-gray-400 h-0"></View>
          <Text className="text-gray-60000 text-sm">or sign in with</Text>
          <View className="border-b h-0 w-16 border-gray-400"></View>
        </View>

        <View className="flex flex-row w-full p-3 justify-center gap-5 mt-3">
          <AntDesign name={"google"} size={17} />
          <FontAwesome name={"facebook"} size={17} />
          <AntDesign name={"twitter"} size={17} />
        </View>
      </View>

      <TouchableOpacity
        className="mb-8 w-40 mx-auto"
        onPress={() => router.navigate("CreateAccount/UserInfo")}
      >
        <Text className="underline text-center text-gray-700  ">
          Create an account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
