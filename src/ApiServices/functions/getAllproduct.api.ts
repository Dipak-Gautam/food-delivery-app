import { mainEndpoint } from "../endpoints";
import SecureFetch from "../SecureFetch";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { productAction } from "../../Store";
import { router } from "expo-router";

const getallProduct = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const request = await SecureFetch({
    url: `${mainEndpoint}/product/all`,
    method: "GET",
    header: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();
  if (request.status == 200) {
    dispatch(productAction.addProduct(response.data));
    if (response.data.length != 0) {
      router.replace("/(tabs)/Home");
    } else {
      router.replace("/NetworkError");
    }
  } else {
    router.replace("/NetworkError");
  }
};

export default getallProduct;
