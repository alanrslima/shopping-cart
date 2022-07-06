export const centsToRealLabel = (cents: number) => {
  var reals = cents / 100;
  return reals.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
