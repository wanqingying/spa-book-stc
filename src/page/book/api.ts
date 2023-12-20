import { IPage, IRes, request } from "src/service/request";
import { JvaBook } from "src/entity/book";

export function saveBook(book: any): IRes<boolean> {
  return request.post("/book", book).then((res) => res.data);
}
export function removeBook(id: number): IRes<boolean> {
  return request.delete(`/book/${id}`).then((res) => res.data);
}
export function editBook(data: JvaBook): IRes<boolean> {
  return request.put(`/book`, data).then((res) => res.data);
}

export function getBookPage(cur: number, size: number): IRes<IPage<JvaBook>> {
  return request
    .get("/book/page", {
      params: { current: cur, size: size },
    })
    .then((res) => res.data);
}
export function getBookFilter(data: any): IRes<IPage<JvaBook>> {
  return request
    .post("/book/filter", data)
    .then((res) => res.data);
}
