import { type CarPart } from './product';
import { type User } from './user';

export interface ICart {
  id: number;
  quantity: number;
  carPart: Pick<CarPart, 'name' | 'id' | 'technicalNumber'>;
  config: {
    price: number;
    discountedPrice: number;
  };
  carPartId: number;
  user: User;
  userId: number;
  createDate: Date;
}

export type IUserCartItem = Pick<ICart, 'carPart' | 'quantity' | 'createDate' | 'id' | 'config'>;

export interface IUserCart {
  firstName: User['firstName'];
  lastName: User['lastName'];
  phoneNumber: User['phoneNumber'];
  cart: IUserCartItem[];
}
