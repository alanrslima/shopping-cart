import down from "./down.json";
import up from "./up.json";

export type MockProps = { down: any; up: any };

export const mocks = [
  { id: 1, data: down },
  { id: 2, data: up },
];
