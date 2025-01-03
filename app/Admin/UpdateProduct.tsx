import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SecureFetch from "../../src/ApiServices/SecureFetch";
import { mainEndpoint } from "../../src/ApiServices/endpoints";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import { useSelector } from "react-redux";
import ResponseComponent from "../../src/Modal/ResponseComponent";
import SmallProductCard from "../../src/Components/ProductCard/SmallProductCard";
import TextInputControllers from "../../src/Components/Controllers/TextInputControllers";
import { useSearchParams } from "expo-router/build/hooks";
import { router } from "expo-router";
import productDataProp from "../../src/schema/ProductData/productData.schema";
import { MaterialIcons } from "@expo/vector-icons";

const updateProductSchema = z.object({
  image: z.string(),
  name: z.string(),
  rating: z.string(),
  category: z.string(),
  popularity: z.string(),
  price: z.string(),
  description: z.string(),
  ingredients: z.string(),
});
export type updateProductSchema = z.infer<typeof updateProductSchema>;

const UpdateProduct = () => {
  const searchParams = useSearchParams();
  let productTemp = searchParams.get("productData");

  if (productTemp == null) {
    router.back();
    return;
  }
  const productData: productDataProp = JSON.parse(productTemp);
  const [visible, setModal] = useState(false);
  const token = useSelector((store: IStore) => store.loginToken);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<updateProductSchema>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      image: productData.image,
      name: productData.name,
      rating: productData.rating,
      category: productData.category,
      popularity: productData.popularity.toString(),
      price: productData.price.toString(),
      description: productData.description,
      ingredients: productData.ingredients.map((item) => item.trim()).join(","),
    },
  });
  const liveValues = watch();
  const onSubbmit: SubmitHandler<updateProductSchema> = async (data) => {
    const formdata = {
      id: productData._id,
      image: data.image,
      name: data.name,
      rating: data.rating,
      category: data.category,
      popularity: Number(data.popularity),
      price: Number(data.price),
      description: data.description,
      ingredients: data.ingredients.split(","),
    };

    const request = await SecureFetch({
      url: `${mainEndpoint}/product`,
      header: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify(formdata),
    });
    const response = await request.json();

    if (request.status == 200) {
      setModal(true);
    } else {
      setError("root", {
        message: "Internal server error. Please try again later",
      });
    }
  };

  const handleDelete = async () => {
    const formdata = {
      id: productData._id,
    };

    const request = await SecureFetch({
      url: `${mainEndpoint}/product`,
      header: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
      body: JSON.stringify(formdata),
    });
    const response = await request.json();

    if (request.status == 200) {
      setModal(true);
    } else {
      setError("root", {
        message: "Internal server error. Please try again later",
      });
    }
  };
  return (
    <>
      <ScrollView className="flex-1 bg-white px-5 pt-2">
        <View className=" mb-6">
          <View className=" items-center justify-center my-3 relative">
            <Text className="text-center font-semibold text-xl">Preview</Text>
            <TouchableOpacity
              className="absolute right-0"
              onPress={() => {
                Alert.alert(
                  "Delete Product",
                  "Are you sure you want to delete the product?",
                  [
                    { text: "Cancel", style: "cancel" },
                    { text: "Yes", onPress: () => handleDelete() },
                  ]
                );
              }}
            >
              <MaterialIcons name="delete-outline" color={"red"} size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <SmallProductCard productData={liveValues} />
          </View>
        </View>
        <View className="gap-2">
          <TextInputControllers
            control={control}
            errors={errors}
            name="image"
            placeholder="Image link"
          />

          <TextInputControllers
            control={control}
            errors={errors}
            name="name"
            placeholder=" Product Name"
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="rating"
            placeholder="Rating"
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="category"
            placeholder="Category"
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="popularity"
            placeholder="Populatiy"
            keyboardType="numeric"
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="price"
            placeholder="Price"
            keyboardType="numeric"
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="description"
            placeholder="Description"
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="ingredients"
            placeholder="Ingredients"
          />
          <Text className="text-red-500 italic text-sm">
            Note: provide ingredients seperated by comma ","
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubbmit)}
          disabled={isSubmitting}
        >
          <Text
            className={`w-full p-2 text-center rounded-xl ${
              isSubmitting ? "bg-[#a18e69]" : "bg-[#ffb727]"
            }  text-white font-semibold mt-4 mb-16`}
          >
            {isSubmitting ? (
              <Text>Submitting...</Text>
            ) : (
              <Text>Update Product</Text>
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {visible && (
        <ResponseComponent
          message="Product updated successfully"
          setModal={setModal}
        />
      )}
    </>
  );
};

export default UpdateProduct;
