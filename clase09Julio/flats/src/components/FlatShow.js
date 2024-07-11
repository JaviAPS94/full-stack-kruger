function FlatShow({ flat, handleDetail }) {
  return (
    <li key={flat.id}>
      <h3>{flat.name}</h3>
      <p>{flat.city}</p>
      <p>{flat.price}</p>
      <button onClick={() => handleDetail(flat.id)}>Ver detalle</button>
    </li>
  );
}

export default FlatShow;
