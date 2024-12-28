import productDataProp from "../ProductData/productData.schema";

export interface ICartData {
  cartData: productDataProp[];
  quantity: number;
}
