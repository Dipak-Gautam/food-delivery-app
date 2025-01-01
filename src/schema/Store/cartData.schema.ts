import productDataProp from "../ProductData/productData.schema";

export interface ICartData {
  data: productDataProp;
  quantity: number;
}
