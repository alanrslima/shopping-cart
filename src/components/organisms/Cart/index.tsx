import { Button } from "components/atoms/Button";
import { Divider } from "components/atoms/Divider";
import { SimpleItem } from "components/atoms/SimpleItem";
import { Tag } from "components/atoms/Tag";
import { Card } from "components/molecules/Card";
import { CartItem } from "components/molecules/CartItem";
import { Tabs } from "components/molecules/Tabs";
import { ReactElement } from "react";
import { Content, Wrapper, WrapperItems, Spacer, Header } from "./styles";
import { Props } from "./types";
import { Props as TabProps } from "components/atoms/Tab/types";
import { useRouter } from "next/router";

export function Cart({ cart }: Props): ReactElement {
  const router = useRouter();

  const handleTab = ({ id }: TabProps) => {
    router.push(id);
  };

  const tabOptions = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
  ];

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
      <Tabs
        onClick={handleTab}
        defaultOption={tabOptions.find((i) => i.id === router.query?.id)}
        options={tabOptions}
      />
    </Wrapper>
  );
}
