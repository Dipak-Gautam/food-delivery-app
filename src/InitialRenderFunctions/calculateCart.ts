import { ICartData } from "../schema/Store/cartData.schema";

function calculateCart(cartArray: ICartData[]): number {
  return cartArray.reduce((total, item) => {
    return total + item.data.price * item.quantity;
  }, 0);
}

export default calculateCart;
