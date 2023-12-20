import React, { FC, HTMLProps } from "react";
import styled from "styled-components";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuItemProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { RootRoutes, RouteType } from "src/route/config";

// export type MenuSideType=MenuProps['items'];

const { Header, Content, Sider } = Layout;
const menus: MenuItemProps[] = [];
function getSideConfig(config: RouteType[]): any[] {
  return config.map((n) => {
    return {
      icon: "",
      label: n.label,
      key: n.path,
      children: n.children ? getSideConfig(n.children) : undefined,
    } as MenuItemProps;
  });
}

const RootDiv: React.ElementType<HTMLProps<HTMLDivElement>> = styled.div`
  // css style
` as any;

interface IProps {
  children?: any;
}

// desc
export const BaseLayout: FC<IProps> = function (props) {
  const items2 = getSideConfig(RootRoutes);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const b=64+22+16*2+24;

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={[items2[0]?.key]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2 as any}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>书籍</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              height:`calc(100vh - ${b}px)`,
              background: colorBgContainer,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
