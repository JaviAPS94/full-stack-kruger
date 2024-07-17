import styled from "styled-components";

export const ProductContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
});

export const ProductName = styled.div({
  fontSize: "20px",
  fontWeight: "bold",
});

export const ProductPrice = styled.div({
  color: "red",
  "&:hover": {
    color: "green",
  },
});
