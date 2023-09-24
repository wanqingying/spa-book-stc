import React, {FC, HTMLProps} from "react";
import styled from "styled-components";
import {Layout} from 'antd'


const RootDiv: React.ElementType<HTMLProps<HTMLDivElement>> = styled.div`
  // css style
` as any;


interface IProps {

}

// desc
export const BaseLayout: FC<IProps> = function (props) {
  return <RootDiv> </RootDiv>;
};

export default BaseLayout;


