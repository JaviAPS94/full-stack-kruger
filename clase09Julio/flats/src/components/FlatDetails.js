function FlatDetails({ selectedFlat, handleBack }) {
  return (
    <>
      <button onClick={handleBack}>Regresar a la lista de departamentos</button>
      <h1>{selectedFlat.name}</h1>
      <img src={selectedFlat.image} alt={selectedFlat.name} />
      <p>{selectedFlat.city}</p>
      <p>{selectedFlat.price}</p>
    </>
  );
}

export default FlatDetails;
