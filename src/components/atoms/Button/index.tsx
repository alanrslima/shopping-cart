import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { Props } from "./types";

export function Button({ title }: Props): ReactElement {
  return <Wrapper>{title}</Wrapper>;
}
