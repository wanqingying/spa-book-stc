import axios from "axios";

export const request = axios.create({ baseURL: "", timeout: 5000 });

export interface IData<T extends any> {
  code: number;
  message: string;
  data: T;
}

export type IRes<T> = Promise<IData<T>>;

export interface IPage<T extends any> {
  records: T[];
  total: number;
}
