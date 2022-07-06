export enum TotalizerId {
  items = "Items",
  discounts = "Discounts",
}

export type TotalizersProps = {
  id: TotalizerId;
  name: string;
  value: number;
  valueLabel?: string;
};
