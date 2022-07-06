import { Picture } from "components/atoms/Picture";
import { ReactElement } from "react";
import { Wrapper, Title, Content, SubValue, Value } from "./styles";
import { Props } from "./types";

export function CartItem({
  name,
  imageUrl,
  sellingPriceLabel,
  priceLabel,
}: Props): ReactElement {
  return (
    <Wrapper>
      <Picture src={imageUrl} />
      <Content>
        <Title>{name}</Title>
        <SubValue>{priceLabel}</SubValue>
        <Value>{sellingPriceLabel}</Value>
      </Content>
    </Wrapper>
  );
}
