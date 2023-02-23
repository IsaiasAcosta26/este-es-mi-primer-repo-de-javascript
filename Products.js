function Products(prots) {
  console.log(prots);

  return (
    <>
      <h1>{prots.name}</h1>
      <h1>{prots.apellido}</h1>
      <p>{prots.edad}</p>
      <p>{prots.estudios}</p>
      <p>{prots.añosAsendente}</p>
      {/* <p>{prots.conocimientos}</p> */}
    </>
  );
}

export default Products;
