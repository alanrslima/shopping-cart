import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  pb: "$5",
  fontSize: "$2",
  "@sm": { fontSize: "$4" },
});

export const Label = styled("p", {});

export const Value = styled("p", {});
