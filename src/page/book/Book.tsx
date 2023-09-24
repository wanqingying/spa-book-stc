import React, {FC, HTMLProps} from "react";
import styled from "styled-components";

const RootDiv: React.ElementType<HTMLProps<HTMLDivElement>> = styled.div`
  // css style
` as any;


interface IProps {

}

// desc
export const Book: FC<IProps> = function (props) {
  return <RootDiv>Book</RootDiv>;
};

export default Book;
