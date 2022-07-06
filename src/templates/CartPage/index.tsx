import { ReactElement } from "react";
import { Cart } from "components/organisms/Cart";
import { Wrapper } from "./styles";

export function CartPage(): ReactElement {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  );
}
