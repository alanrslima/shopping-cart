import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { CartPage } from "templates/CartPage";

const Home: NextPage = () => {
  const router = useRouter();

  const redirect = useCallback(() => {
    router.push("/1");
  }, [router]);

  useEffect(() => {
    redirect();
  }, [redirect]);

  return <CartPage />;
};

export default Home;
