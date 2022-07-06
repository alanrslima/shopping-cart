import { styled } from "styles/stitches.config";

export const Wrapper = styled("button", {
  borderRadius: "$2",
  border: "none",
  color: "$white",
  bg: "$button",
  fontSize: "$2",
  "@sm": { fontSize: "$3" },
  fontWeight: "$bold",
  w: "100%",
  padding: "$5 $0",
  fontFamily: "$fonts$poppins",
  cursor: "pointer",
  transition: "$1",

  _hover: {
    opacity: 0.6,
  },
});
