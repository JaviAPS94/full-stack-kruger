import { useContext } from "react";
import CartContext from "../context/cart";
import { List } from "@mui/material";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <List>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </List>
    </>
  );
}

export default Cart;
