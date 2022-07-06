import { styled } from "styles/stitches.config";

export const Wrapper = styled("button", {
  p: "$4",
  border: "1px solid $gray600",
  cursor: "pointer",

  variants: {
    style: {
      selected: { bg: "$button", color: "$white", fontWeight: "$bold" },
    },
  },
});

export const Label = styled("label", {});
