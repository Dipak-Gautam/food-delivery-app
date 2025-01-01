import { ICartData } from "../schema/Store/cartData.schema";

function getProductNames(cartArray: ICartData[]): string[] {
  return cartArray.map((item) => item.data.name);
}

export default getProductNames;
