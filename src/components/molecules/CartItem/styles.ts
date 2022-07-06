import { styled } from "styles/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  fontFamily: "$poppins",
});

export const Content = styled("div", {
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  padding: "$0 $4",
});

export const Title = styled("p", {
  fontWeight: "$semiBold",
  mb: "$3",
});

export const SubValue = styled("p", {
  fontSize: "$1",
  fontWeight: "$semiBold",
  color: "$gray300",
});

export const Value = styled("p", {
  fontSize: "$2",
  fontWeight: "$semiBold",
});
