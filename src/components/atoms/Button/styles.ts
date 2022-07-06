import { styled } from "styles/stitches.config";

export const WrapperButton = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  fontFamily: "$fonts$poppins",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});
