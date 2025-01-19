import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import SecureFetch from "../../src/ApiServices/SecureFetch";
import { mainEndpoint } from "../../src/ApiServices/endpoints";
import TextInputControllers from "../../src/Components/Controllers/TextInputControllers";
import SmallProductCard from "../../src/Components/ProductCard/SmallProductCard";
import { IStore } from "../../src/schema/Store/mainStore.schema";
import ResponseComponent from "../../src/Modal/ResponseComponent";

const AddProductSchema = z.object({
  image: z.string(),
  name: z.string(),
  rating: z.string(),
  category: z.string(),
  popularity: z.string(),
  price: z.string(),
  description: z.string(),
  ingredients: z.string(),
});
export type AddProductSchema = z.infer<typeof AddProductSchema>;

const AddProduct = () => {
  const [visible, setModal] = useState(false);
  const token = useSelector((store: IStore) => store.loginToken);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AddProductSchema>({
    resolver: zodResolver(AddProductSchema),
  });
  const liveValues = watch();
  const onSubbmit: SubmitHandler<AddProductSchema> = async (data) => {
    const formdata = {
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
      url: `${mainEndpoint}/product/add`,
      header: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(formdata),
    });
    const response = await request.json();
    console.log("request", request);
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
        <View className="gap-2">
          <TextInputControllers
            control={control}
            errors={errors}
            name="image"
            placeholder="Image link"
            multiline={true}
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
            placeholder="Popularity"
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
            multiline={true}
          />
          <TextInputControllers
            control={control}
            errors={errors}
            name="ingredients"
            placeholder="Ingredients"
            multiline={true}
          />
          <Text className="text-red-500 italic text-sm">
            Note: provide ingredients separated by comma ","
          </Text>
        </View>
        <View className="mt-9 my-6">
          <View className=" items-center justify-center">
            <Text className="text-center font-semibold text-xl">Preview</Text>
          </View>
          <View>
            <SmallProductCard productData={liveValues} />
          </View>
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
              <Text>Add Product</Text>
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {visible && (
        <ResponseComponent
          message="Product added successfully"
          setModal={setModal}
        />
      )}
    </>
  );
};

export default AddProduct;
