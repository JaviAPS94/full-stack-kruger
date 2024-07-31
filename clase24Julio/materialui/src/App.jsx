import { Rating, Button, Avatar } from "@mui/material";

function App() {
  return (
    <>
      <Button variant="contained" color="secondary">
        Presionar boton
      </Button>
      <Rating />
      <Avatar
        alt="avatar"
        src="https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*"
      />
    </>
  );
}

export default App;
