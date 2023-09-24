// import {  } from "react-router-dom";
import { RouteProps } from "react-router";
import Home from "src/page/home/Home";
import Book from "src/page/book/Book";
import { BaseLayout } from "src/layout/BaseLayout";

export interface Rx {
  label?: string;
  element: any;
  layout?: any;
  path: string;
  children?: Rx[];
}

export const RootRoutes: Rx[] = [
  //xx
  { path: "/", element: Home, label: "首页", layout: BaseLayout },
  { path: "/book", element: Book, label: "书籍", layout: BaseLayout },
];
