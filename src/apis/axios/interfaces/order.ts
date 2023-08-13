import { type CarPart } from './product';
import { type User } from './user';

export enum OrderState {
  CREATED = 'CREATED',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  USERCANCELED = 'USERCANCELED',
  ADMINCANCELED = 'ADMINCANCELED',
  PAYMENTDUE = 'PAYMENTDUE',
  PROBLEM = 'PROBLEM',
  RETURNED = 'RETURNED',
  PROCESSING = 'PROCESSING',
  PAID = 'PAID',
}

export enum PaymentType {
  ONLINE = 'ONLINE',
  CASH = 'CASH',
}

export enum ShippingType {
  STANDARD = 'STANDARD',
  EXPRESS = 'EXPRESS',
  ECONOMY = 'ECONOMY',
}

export interface IOrder {
  id: number;
  user: User;
  userId: number;
  transferCost: number;
  deliveryDate: Date;
  state: OrderState;
  paymentType: PaymentType;
  cart: IOrderCart[];
  dateCreated: string;
  dateUpdated: string;
  traceNumber: string;
  receiverFirstName: string;
  receiverFamilyName: string;
  telephone: string;
  description: string;
  latitude: string;
  longitude: string;
  totalPrice: number;
  extraInfo: string;
  shippingType: ShippingType;
  city: string;
  province: string;
}

export interface IOrderCart {
  id: number;
  quantity: number;
  carPart: Pick<CarPart, 'name' | 'id' | 'technicalNumber'>;
  carPartId: number;
  user: User;
  userId: number;
  supplierUserId: number;
  orderId: number;
  price: number | null;
  discount: number;
  discountId: number | null;
  discountCode: unknown; // TODO DiscountEntity;
  createDate: Date;
  updateDate: Date;
}
