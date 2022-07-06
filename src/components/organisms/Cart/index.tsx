import { Button } from "components/atoms/Button";
import { Divider } from "components/atoms/Divider";
import { Tag } from "components/atoms/Tag";
import { Card } from "components/molecules/Card";
import { CartItem } from "components/molecules/CartItem";
import { ReactElement } from "react";
import {
  Content,
  Wrapper,
  WrapperItems,
  Spacer,
  TotalLabel,
  TotalValue,
  WrapperTotal,
  Header,
} from "./styles";

export function Cart(): ReactElement {
  const items = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <Card>
        <Header>Meu carrinho</Header>
        <Divider />
        <WrapperItems>
          {items.map((item) => (
            <Spacer key={item}>
              <CartItem />
            </Spacer>
          ))}
        </WrapperItems>
        <Divider />
        <Content>
          <WrapperTotal>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>32,00</TotalValue>
          </WrapperTotal>

          <Tag />
        </Content>
        <Divider />
        <Content>
          <Button />
        </Content>
      </Card>
    </Wrapper>
  );
}
