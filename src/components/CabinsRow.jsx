function CabinsRow() {
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center items-center">
        <div className="justify-self-start flex gap-2 items-center">
          <div className="h-10  bg-blue-800 w-15  "></div>
          <span>001</span>
        </div>
        <p>Fits up to 2 guests</p>
        <p>250$ </p>
        <div className="flex gap-2 items-center">
          <p>250</p>
          <button className="bg-blue-400 rounded-full py-1 px-2">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CabinsRow;
