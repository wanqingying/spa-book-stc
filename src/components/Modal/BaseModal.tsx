import { Modal } from "antd";
import React from "react";

export function useMyModal() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const modal = {
    visible: visible,
    setVisible: setVisible,
  };

  return [modal,];
}
