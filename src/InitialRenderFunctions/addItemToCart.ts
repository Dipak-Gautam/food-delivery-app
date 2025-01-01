import productDataProp from "../schema/ProductData/productData.schema";
import { ICartData } from "../schema/Store/cartData.schema";

function updateCart(product: productDataProp, cartArray: ICartData[]) {
  const existingItemIndex = cartArray.findIndex(
    (item) => item.data._id === product._id
  );

  if (existingItemIndex !== -1) {
    cartArray[existingItemIndex].quantity += 1;
  } else {
    cartArray.push({
      data: product,
      quantity: 1,
    });
  }

  return cartArray;
}

export default updateCart;
