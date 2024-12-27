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

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type loginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubbmit: SubmitHandler<loginSchema> = async (data) => {
    console.log(data);
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    if (data.email == "anjan@gmail.com" && data.password == "password123") {
      router.replace("(tabs)/Task");
    } else if (data.email != "anjan@gmail.com") {
      setError("email", { message: "Invalid email" });
    } else {
      setError("password", { message: "Incorrect password" });
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
              placeholder="Enter your email"
            />
            <TextInputControllers
              control={control}
              errors={errors}
              name="password"
              placeholder="Enter your password"
            />
          </View>

          <TouchableOpacity
            onPress={handleSubmit(onSubbmit)}
            disabled={isSubmitting}
          >
            <Text
              className={`w-full p-2 text-center rounded-xl ${
                isSubmitting ? "bg-[#896f3d]" : "bg-[#ffb727]"
              }  text-white font-semibold mt-4`}
            >
              {isSubmitting ? <Text>Submitting...</Text> : <Text>Sign in</Text>}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row w-full justify-center items-center gap-5 mt-10">
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
        onPress={() => router.replace("CreateAccount")}
      >
        <Text className="underline text-center text-gray-700  ">
          Create an account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
