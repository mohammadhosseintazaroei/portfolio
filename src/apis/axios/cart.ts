import { type ICart, type IUserCart } from './interfaces/cart';
import axiosInstance from './axios-config';

export const getAllCarts = async () => {
  const carts = await axiosInstance.get<ICart[]>('/order/cart');
  return carts.data.reduce<IUserCart[]>((acc, cart) => {
    const userCart = acc.find((u) => u.phoneNumber === cart.user.phoneNumber);
    if (userCart) {
      userCart.cart.push({
        id: cart.id,
        carPart: cart.carPart,
        quantity: cart.quantity,
        createDate: cart.createDate,
        config: cart.config,
      });
    } else {
      acc.push({
        firstName: cart.user.firstName,
        lastName: cart.user.lastName,
        phoneNumber: cart.user.phoneNumber,
        cart: [
          {
            id: cart.id,
            carPart: cart.carPart,
            quantity: cart.quantity,
            createDate: cart.createDate,
            config: cart.config,
          },
        ],
      });
    }
    return acc;
  }, []);
};
