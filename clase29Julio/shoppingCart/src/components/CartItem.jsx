import { ListItem, ListItemText, Typography } from "@mui/material";

function CartItem({ item }) {
  return (
    <ListItem>
      <ListItemText
        primary={item.name}
        secondary={
          <>
            <Typography variant="body2" color="text.primary">
              {`Precio: ${item.price} - Cantidad: ${item.quantity}`}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {`Subtotal: ${item.price * item.quantity}`}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}

export default CartItem;
