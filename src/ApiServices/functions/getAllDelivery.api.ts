import { IDeliveryData } from "../../schema/Delivery/deliveryData.schema";
import { mainEndpoint } from "../endpoints";
import SecureFetch from "../SecureFetch";

const getallDelivery = async (
  token: string,
  setDeliveryData: React.Dispatch<React.SetStateAction<IDeliveryData[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const request = await SecureFetch({
    url: `${mainEndpoint}/delivery`,
    method: "GET",
    header: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();
  if (request.status == 200) {
    setDeliveryData(response);
  }
  setLoading(false);
};

export default getallDelivery;
