import { ItemProps } from "./item";
import { MetaDataProps } from "./metaData";
import { TotalizersProps } from "./totalizers";

export type CartProps = {
  value: number;
  valueLabel?: string;
  freeShipping?: boolean;
  items: ItemProps[];
  totalizers: TotalizersProps[];
  itemMetadata: MetaDataProps;
};
