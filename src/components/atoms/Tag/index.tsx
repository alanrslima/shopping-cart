import { ReactElement } from "react";
import { Text, Wrapper } from "./styles";
import { Props } from "./types";

export function Tag({ text }: Props): ReactElement {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}
