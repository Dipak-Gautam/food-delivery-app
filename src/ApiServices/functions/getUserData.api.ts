import { userAction } from "../../Store";
import { mainEndpoint } from "../endpoints";
import SecureFetch from "../SecureFetch";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

const getUser = async (token: string, dispatch: Dispatch<UnknownAction>) => {
  const request = await SecureFetch({
    url: `${mainEndpoint}/user//profile`,
    method: "GET",
    header: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();
  if (request.status == 200) {
    dispatch(userAction.addData(response.data));
  }
};

export default getUser;
