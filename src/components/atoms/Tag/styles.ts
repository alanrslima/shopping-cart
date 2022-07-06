import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  br: "$pill",
  backgroundColor: "$signalGreen",
  fontWeight: "$semiBold",
  fontFamily: "$fonts$poppins",
  padding: "$4",
  display: "flex",
  justifyContent: "center",
});

export const Text = styled("span", {
  fontSize: "$2",
  color: "$blackA500",
  textAlign: "center",
});
