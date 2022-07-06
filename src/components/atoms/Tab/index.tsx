import { ReactElement } from "react";
import { Wrapper, Label } from "./styles";
import { Props } from "./types";

export function Tab({ id, label, selected, onClick }: Props): ReactElement {
  return (
    <Wrapper
      style={selected ? "selected" : undefined}
      // css={{ bg: selected ? "$button" : "transparent" }}
      onClick={() => onClick && onClick(id)}
    >
      <Label>{label}</Label>
    </Wrapper>
  );
}
