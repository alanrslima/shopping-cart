import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { Props } from "./types";

export function Card({ children }: Props): ReactElement {
  return <Wrapper>{children}</Wrapper>;
}
