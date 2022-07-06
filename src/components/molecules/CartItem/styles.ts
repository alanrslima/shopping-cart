import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  fontFamily: "$poppins",
});

export const Content = styled("div", {
  flexDirection: "column",
  display: "flex",
  flex: "min-content",
  justifyContent: "center",
  padding: "$0 $4",
});

export const Title = styled("p", {
  fontWeight: "$semiBold",
  fontSize: "$1",
  "@sm": { fontSize: "$3" },
  mb: "$3",
});

export const SubValue = styled("p", {
  fontSize: "$1",
  fontWeight: "$semiBold",
  color: "$gray300",
  mb: "$2",
});

export const Value = styled("p", {
  fontSize: "$2",
  fontWeight: "$semiBold",
});
