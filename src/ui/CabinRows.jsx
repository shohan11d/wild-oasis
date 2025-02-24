function CabinRows({ cabin }) {
  return (
    <div className=" border m-2 grid grid-cols-5 p-2 gap-10">
      <img height="100px" width="100px"  src={cabin.image} alt="cabin" />
      <h1>{cabin.id}</h1>
      <p>{cabin.maxCapacity}</p>
      <p>{cabin.description}</p>
      <p>{cabin.regularPrice}</p>
      <p>{cabin.discount}</p>
    </div>
  );
}

export default CabinRows;
