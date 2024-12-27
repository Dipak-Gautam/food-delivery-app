import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { string, z } from "zod";
import TextInputControllers from "../src/Components/Controllers/TextInputControllers";

const signupSchema = z
  .object({
    email: string().email("Please enter valid email"),
    password: string().min(8, "password must me 8 character long"),
    confirmPassword: string().min(
      8,
      "password and confirm password did not match"
    ),
  })
  .refine((data) => data.password === data.password, {
    path: ["confirmPassword"],
    message: "Password must match",
  });

type signupTypes = z.infer<typeof signupSchema>;

const CreateAccount = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<signupTypes>({
    resolver: zodResolver(signupSchema),
  });
  const onSubbmit: SubmitHandler<signupTypes> = async (data) => {
    await new Promise<void>((resolve) => {
      setInterval(resolve, 1000);
    });
    if (data.email == "anjan@gmail.com") {
      setError("email", { message: "Email already taken" });
    }
    console.log("data", data);
  };

  return (
    <SafeAreaView className="flex-1  px-8">
      <View className="flex-1 justify-center  gap-10">
        <View>
          <Text className="text-5xl mb-2 text-indigo-400 font-medium">
            Sign up
          </Text>
        </View>
        <View className="">
          <TextInputControllers
            control={control}
            name="email"
            placeholder="Enter your email"
            errors={errors}
          />
          <TextInputControllers
            control={control}
            name="password"
            placeholder="Enter your password"
            errors={errors}
          />
          <TextInputControllers
            control={control}
            name="confirmPassword"
            placeholder="Comfirm Password"
            errors={errors}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubbmit)}
          disabled={isSubmitting}
        >
          <Text
            className={`w-full p-2 text-center rounded-xl ${
              isSubmitting ? "bg-[#7d6b46]" : "bg-[#ffb727]"
            }  text-white font-semibold mt-4`}
          >
            {isSubmitting ? <Text>Submitting</Text> : <Text>Sign Up</Text>}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="mb-8 w-32 mx-auto"
        onPress={() => router.replace("Login")}
      >
        <Text className="underline text-center text-gray-700">Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateAccount;
