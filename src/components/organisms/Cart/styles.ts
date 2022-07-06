import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  w: "100%",
  maxW: "500px",
});

export const Content = styled("div", {
  padding: "$6",
});

export const WrapperItems = styled("div", {
  display: "flex",
  flex: "max-content",
  padding: "$6",
  overflowY: "scroll",
  flexDirection: "column",
});

export const Spacer = styled("div", {
  m: "$3 $0",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "center",
  p: "$5",
  fontWeight: "$black",
  fontSize: "$4",
});
