import {
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import CartContext from "../context/cart";

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <Card>
      <CardMedia component="img" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.price}</Typography>
        <TextField
          label="Cantidad"
          type="number"
          inputProps={{ min: 1 }}
          size="small"
          variant="outlined"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product, quantity)}
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
