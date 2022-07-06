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
  mt: "$5",
});

export const WrapperTotal = styled("div", {
  display: "flex",
  flexDirection: "row",
  fontWeight: "$black",
  justifyContent: "space-between",
  pb: "$6",
  fontSize: "$4",
});

export const TotalLabel = styled("p", {});

export const TotalValue = styled("p", {});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "center",
  p: "$5",
  fontWeight: "$black",
  fontSize: "$4",
});
