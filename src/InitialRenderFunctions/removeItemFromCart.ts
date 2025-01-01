import productDataProp from "../schema/ProductData/productData.schema";
import { ICartData } from "../schema/Store/cartData.schema";

function removeItemFromCart(product: productDataProp, cartArray: ICartData[]) {
  const existingItemIndex = cartArray.findIndex(
    (item) => item.data._id === product._id
  );

  if (existingItemIndex !== -1) {
    const existingItem = cartArray[existingItemIndex];
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      cartArray.splice(existingItemIndex, 1);
    }
  }

  return cartArray;
}

export default removeItemFromCart;
