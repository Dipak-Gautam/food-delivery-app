import React from "react";

import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

import { Text, TextInput, View } from "react-native";

interface TextInputControllersProp {
  control: Control<any>;
  errors: FieldValues;
  name: string;
  placeholder: string;
}

const TextInputControllers = ({
  control,
  errors,
  name,
  placeholder,
}: TextInputControllersProp) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border-b p-2 rounded-lg text-base text-black"
            placeholder={placeholder}
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
      />
      <View className="h-4">
        {errors[name] && (
          <Text className="text-red-400 text-xs ml-2 ">
            {errors[name].message}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextInputControllers;
