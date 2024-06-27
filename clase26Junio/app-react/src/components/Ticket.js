//Los props son un objeto
function Ticket({ name, destination, gender, seat }) {
  return (
    <>
      <h1>Ticket Details</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Destination: {destination}</li>
        <li>Gender: {gender}</li>
        <li>Seat: {seat}</li>
      </ul>
    </>
  );
}

export default Ticket;
