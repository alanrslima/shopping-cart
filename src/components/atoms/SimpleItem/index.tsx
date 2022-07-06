import { ReactElement } from "react";
import { Wrapper, Label, Value } from "./styles";
import { Props } from "./types";

export function SimpleItem({ label, value, highlight }: Props): ReactElement {
  return (
    <Wrapper css={{ fontWeight: highlight ? "$black" : "$semiBold" }}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
}
