import React, { FC, Fragment, HTMLProps } from "react";
import styled from "styled-components";
import { request } from "src/service/request";
import { Table, Button, Popconfirm, message, Modal, Form, Input } from "antd";
import type { TableColumnType } from "antd";
import { EBookType, JvaBook } from "src/entity/book";
import { useBookList } from "./hooks";
import { editBook, removeBook, saveBook } from "./api";
import { ActionModal } from "./ActionModal";

const RootDiv: React.ElementType<HTMLProps<HTMLDivElement>> = styled.div`
  // css style
` as any;
const SearchBarDiv: React.ElementType<HTMLProps<HTMLDivElement>> = styled.div`
  input,
  .ant-input-affix-wrapper {
    border-radius: 0;
    margin-right: 8px;
  }
` as any;

interface IProps {
  children?: any;
}

// desc
export const Book: FC<IProps> = function (props) {
  const bok = useBookList();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [edit, setEdit] = React.useState<JvaBook>(null);
  const [form] = Form.useForm<JvaBook>();

  const columns: TableColumnType<JvaBook>[] = [
    {
      title: "书籍序号",
      width: 100,
      render: (t, r) => {
        return r.bookId;
      },
    },
    {
      title: "书籍名称",
      width: 150,
      render: (t, r) => {
        return r.bookName;
      },
    },
    {
      title: "书籍作者",
      render: (t, r) => {
        return r.bookAuthor;
      },
    },
    {
      title: "书籍类型",
      render: (t, r) => {
        return (
          EBookType.find((b) => b.type === r.bookType)?.label ?? r.bookType
        );
      },
    },
    {
      title: "书籍描述",
      render: (t, r) => {
        return r.bookDesc;
      },
    },
    {
      title: "操作",
      render: (_, r) => {
        return (
          <div style={{ display: "flex" }}>
            <Popconfirm
              title="确认删除?"
              onConfirm={() => {
                removeBook(r.bookId).then((res) => {
                  if (res.code === 0) {
                    message.success("操作成功 ").then();
                    bok.reload();
                  } else {
                    message.error(res.message || "操作失败").then();
                  }
                });
              }}
            >
              <Button type={"link"} style={{ padding: "0 10px 0 0" }}>
                删除
              </Button>
            </Popconfirm>
            <Button
              type={"link"}
              style={{ padding: 0 }}
              onClick={() => {
                setVisible(true);
                setEdit(r);
                form.setFieldsValue(r);
              }}
            >
              编辑
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <RootDiv>
      <SearchBarDiv
        style={{
          marginBottom: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Input
          style={{
            width: 200,
          }}
          value={bok.search}
          onChange={(e) => {
            bok.setSearch(e.target.value);
          }}
          placeholder={"搜索书名"}
          allowClear={true}
        />
        <Input
          style={{
            width: 200,
          }}
          value={bok.author}
          onChange={(e) => {
            bok.setAuthor(e.target.value);
          }}
          placeholder={"搜索作者"}
          allowClear={true}
        />
        <Button
          type="primary"
          onClick={() => {
            console.log("add");
            setVisible(true);
          }}
          disabled={false}
          loading={false}
        >
          添加书籍
        </Button>
      </SearchBarDiv>
      <Table
        columns={columns}
        dataSource={bok.bookList}
        rowKey={"bookId"}
        scroll={{ y: "calc(100vh - 330px)" }}
        loading={bok.loading}
        pagination={{
          pageSize: bok.size,
          current: bok.current,
          total: bok.total,
          onChange: (page, pageSize) => {
            bok.setSize(pageSize);
            bok.setCurrent(page);
          },
        }}
      />
      <Modal
        open={visible}
        title={"添加书籍"}
        width={400}
        destroyOnClose={true}
        onCancel={() => {
          setVisible(false);
          setEdit(null);
        }}
        onOk={() => {
          form.validateFields().then((b) => {
            const method = Boolean(edit) ? editBook : saveBook;
            method(b)
              .then((res) => {
                if (res.code === 0) {
                  message.success("操作成功").then();
                  return Promise.resolve();
                } else {
                  return Promise.reject(res.message);
                }
              })
              .then(() => {
                bok.reload();
                setVisible(false);
                setEdit(null);
              });
          });
        }}
      >
        <ActionModal
          form={form}
          isEdit={Boolean(edit)}
          close={() => {
            setVisible(false);
            setEdit(null);
          }}
        />
      </Modal>
    </RootDiv>
  );
};

export default Book;
