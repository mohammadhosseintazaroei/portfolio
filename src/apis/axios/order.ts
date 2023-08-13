import { type PaginatedResponse } from './interfaces/common';
import { type IOrder } from './interfaces/order';
import axiosInstance from './axios-config';

export const getOrderList = async (page: number) => {
  const res = (
    await axiosInstance.get<PaginatedResponse<IOrder>>('/order', {
      params: { page },
    })
  ).data;
  return res;
};
