import { ReactElement, useCallback, useEffect, useState } from "react";
import { Cart } from "components/organisms/Cart";
import { Wrapper } from "./styles";
import { CartProps } from "types/cart";
import { getCartService } from "services/cart/getCart";
import { useRouter } from "next/router";

export function CartPage(): ReactElement {
  const [cart, setCart] = useState<CartProps>();
  const router = useRouter();

  const handleCart = useCallback(async () => {
    try {
      if (router.query?.id) {
        const data = await getCartService(Number(router.query?.id));
        setCart(data);
      }
    } catch (error) {}
  }, [router]);

  useEffect(() => {
    handleCart();
  }, [handleCart]);

  return <Wrapper>{cart && <Cart cart={cart} />}</Wrapper>;
}
