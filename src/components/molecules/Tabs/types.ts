import { Props as TabProps } from "components/atoms/Tab/types";

export type Props = {
  options: TabProps[];
  defaultOption?: TabProps;
  onClick: (tab: TabProps) => void;
};
