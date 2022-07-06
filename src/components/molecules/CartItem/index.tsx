import { Picture } from "components/atoms/Picture";
import { ReactElement } from "react";
import { Wrapper, Title, Content, SubValue, Value } from "./styles";

export function CartItem(): ReactElement {
  return (
    <Wrapper>
      <Picture />
      <Content>
        <Title>Trufa de morango</Title>
        <SubValue>R$ 1,23</SubValue>
        <Value>R$ 1,11</Value>
      </Content>
    </Wrapper>
  );
}
