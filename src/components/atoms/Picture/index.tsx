import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { Props } from "./types";

export function Picture({ src }: Props): ReactElement {
  return <Wrapper src={src} />;
}
