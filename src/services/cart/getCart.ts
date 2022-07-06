import { centsToRealLabel } from "lib/currency";
import cardData from "mocks/up.json";
import { CartProps } from "types/cart";

const processor = (data: CartProps): CartProps => {
  return {
    ...data,
    // Maybe those roles should be came from back-end
    freeShipping: data.value ? data?.value > 1000 : false,
    valueLabel: centsToRealLabel(data.value),
    items: data.items.map((item) => ({
      ...item,
      sellingPriceLabel: centsToRealLabel(item.sellingPrice),
      priceLabel: centsToRealLabel(item.price),
    })),
    totalizers: data.totalizers.map((totalizer) => ({
      ...totalizer,
      valueLabel: centsToRealLabel(totalizer.value),
    })),
  };
};

export const getCartService = (): Promise<CartProps> => {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(processor(cardData as any));
    }, 1000);
  });
};
