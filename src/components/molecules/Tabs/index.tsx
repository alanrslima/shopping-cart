import { Tab } from "components/atoms/Tab";
import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { Props } from "./types";

export function Tabs({ options, onClick, defaultOption }: Props): ReactElement {
  return (
    <Wrapper>
      {options.map((option) => (
        <Tab
          key={option.label}
          {...option}
          onClick={() => onClick(option)}
          selected={defaultOption?.id === option.id}
        />
      ))}
    </Wrapper>
  );
}
