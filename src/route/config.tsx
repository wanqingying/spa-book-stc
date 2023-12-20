// import {  } from "react-router-dom";
import { RouteProps } from "react-router";
import Home from "src/page/home/Home";
import Book from "src/page/book/Book";
import { BaseLayout } from "src/layout/BaseLayout";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export interface RouteType {
  label?: string;
  element: any;
  layout?: any;
  path: string;
  children?: RouteType[];
  icon?: any;
}

export const RootRoutes: RouteType[] = [
  //xx
  {
    path: "/",
    element: BaseLayout,
    label: "首页",
    icon: UserOutlined,
    children: [
      // xxa
      {
        path: "/home",
        element: Home,
        label: "首页",
        icon: NotificationOutlined,
      },
      { path: "/book", element: Book, label: "书籍", icon: LaptopOutlined },
    ],
  },
];
