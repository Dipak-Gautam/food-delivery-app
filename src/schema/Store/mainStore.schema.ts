import productDataProp from "../ProductData/productData.schema";
import { IUserProp } from "../UserData/user.schema";
import { ICartData } from "./cartData.schema";

export interface IStore {
  cart: ICartData[];
  loginToken: string;
  product: productDataProp[];
  user: IUserProp;
  message: string[];
}
