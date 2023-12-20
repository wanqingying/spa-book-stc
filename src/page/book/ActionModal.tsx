import React, { FC, HTMLProps } from "react";
import styled from "styled-components";
import { Input, Select, Form, Button } from "antd";
import { EBookType, JvaBook } from "src/entity/book";
import { saveBook } from "src/page/book/api";

const RootDiv: React.ElementType<HTMLProps<HTMLDivElement>> = styled.div`
  // css style
` as any;

interface IProps {
  close: Function;
  form: any;
  handleSubmit?: Function;
  isEdit?: boolean;
}

interface FieldType extends JvaBook {}

// desc
export const ActionModal: FC<IProps> = function (props) {
  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      form={props.form}
      wrapperCol={{ span: 18 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      {props.isEdit && (
        <Form.Item<FieldType>
          label="书籍序号"
          name={"bookId"}
          rules={[{ required: true, message: "请输入书籍名称" }]}
        >
          <Input disabled={props.isEdit} />
        </Form.Item>
      )}
      <Form.Item<FieldType>
        label="书籍名称"
        name="bookName"
        rules={[{ required: true, message: "请输入书籍名称" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="书籍作者"
        name="bookAuthor"
        rules={[{ required: true, message: "请输入书籍作者" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="书籍类型"
        name={"bookType"}
        rules={[{ required: true, message: "请输入书籍类型" }]}
      >
        <Select
          options={EBookType.map((t) => {
            return { label: t.label, value: t.type };
          })}
        />
      </Form.Item>
      <Form.Item<FieldType> label="书籍描述" name={"bookDesc"}>
        <Input.TextArea rows={3} />
      </Form.Item>
    </Form>
  );
};

export default ActionModal;
