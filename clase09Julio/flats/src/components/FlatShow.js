function FlatShow({ flat }) {
  return (
    <li key={flat.id}>
      <h3>{flat.name}</h3>
      <p>{flat.city}</p>
      <p>{flat.price}</p>
      <button>Ver detalle</button>
    </li>
  );
}

export default FlatShow;
