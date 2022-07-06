import { Button } from "components/atoms/Button";
import { Divider } from "components/atoms/Divider";
import { SimpleItem } from "components/atoms/SimpleItem";
import { Tag } from "components/atoms/Tag";
import { Card } from "components/molecules/Card";
import { CartItem } from "components/molecules/CartItem";
import { ReactElement } from "react";
import { Content, Wrapper, WrapperItems, Spacer, Header } from "./styles";
import { Props } from "./types";

export function Cart({ cart }: Props): ReactElement {
  return (
    <Wrapper>
      <Card>
        <Header>Meu carrinho</Header>
        <Divider />
        <WrapperItems>
          {cart.items.map((item) => (
            <Spacer key={item.id}>
              <CartItem {...item} />
            </Spacer>
          ))}
        </WrapperItems>
        <Divider />
        <Content>
          {cart.totalizers.map((totalizer) => (
            <SimpleItem
              key={totalizer.id}
              label={totalizer.name}
              value={totalizer.valueLabel}
            />
          ))}
          <SimpleItem highlight label="Total" value={cart?.valueLabel} />

          {cart.freeShipping && (
            <Tag text="Parabéns, sua compra tem frete grátis!" />
          )}
        </Content>
        <Divider />
        <Content>
          <Button title="Finalizar compra" />
        </Content>
      </Card>
    </Wrapper>
  );
}
