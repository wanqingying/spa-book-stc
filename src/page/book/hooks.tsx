import {} from "antd";
import React, { useEffect } from "react";
import { JvaBook } from "src/entity/book";
import { IPage, IRes, request } from "src/service/request";
import { getBookFilter, getBookPage } from "./api";
import { debounce } from "lodash";

export function useBookList() {
  const [bookList, setBookList] = React.useState<JvaBook[]>([]);
  const [size, setSize] = React.useState<number>(10);
  const [current, setCurrent] = React.useState<number>(1);
  const [total, setTotal] = React.useState<number>(0);
  const [search, setSearch] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const reload = React.useCallback(
    debounce(function () {
      setLoading(true);
      getBookFilter({
        current: current,
        size: size,
        bookName: search || undefined,
        bookAuthor: author || undefined,
      })
        .then((data) => {
          if (data.code === 0) {
            setTotal(data.data.total);
            setBookList(data.data.records);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 800),
    [size, current, author, search],
  );

  React.useEffect(
    function () {
      reload();
    },
    [reload],
  );

  return {
    current,
    size,
    total,
    bookList,
    setCurrent,
    setSize,
    reload,
    search,
    setSearch,
    author,
    setAuthor,
    loading,
  };
}
