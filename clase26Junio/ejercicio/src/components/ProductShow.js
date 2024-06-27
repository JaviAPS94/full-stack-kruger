import cellphone from "../images/cellphone.svg";
import computer from "../images/computer.svg";
import printer from "../images/printer.svg";
import screen from "../images/screen.svg";

const images = {
  cellphone,
  computer,
  printer,
  screen,
};

function ProductShow({ type }) {
  return <img alt={type} src={images[type]} />;
}

export default ProductShow;
