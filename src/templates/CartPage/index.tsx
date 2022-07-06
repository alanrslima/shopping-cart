import { ReactElement, useEffect, useState } from "react";
import { Cart } from "components/organisms/Cart";
import { Wrapper } from "./styles";
import { CartProps } from "types/cart";
import { getCartService } from "services/cart/getCart";

export function CartPage(): ReactElement {
  const [cart, setCart] = useState<CartProps>();

  const handleCart = async () => {
    try {
      const data = await getCartService();
      setCart(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleCart();
  }, []);

  return <Wrapper>{cart && <Cart cart={cart} />}</Wrapper>;
}
