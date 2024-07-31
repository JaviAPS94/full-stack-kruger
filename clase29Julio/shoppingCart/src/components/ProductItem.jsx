import { Card, CardMedia } from "@mui/material";

function ProductItem({ product }) {
  return (
    <Card>
      <CardMedia component="img" image={product.image} alt={product.name} />
    </Card>
  );
}

export default ProductItem;
