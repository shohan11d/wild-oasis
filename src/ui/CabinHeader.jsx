function CabinHeader() {
  return (
    <div className=" border m-2 grid grid-cols-6 p-2 gap-10">
      <div>image</div>
      <div>id</div>
      <div>description</div>
      <div>maxCapacity</div>
      <div>regularPrice</div>
      <div>discount</div>
    </div>
  );
}

export default CabinHeader;
