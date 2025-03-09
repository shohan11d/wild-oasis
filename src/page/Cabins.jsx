import CabinsRow from "../components/CabinsRow";
function Cabins() {
  return (
    <div className="m-5 max-w-[700px]">
      <div className="flex  justify-between py-5    ">
        <h2 className="text-2xl">All Cabins</h2> <button>Filter/ Sort</button>
      </div>
      <div className="space-y-4">
        <div className="grid justify-items-center grid-cols-4">
          <h2 className="py-2 ">Cabin</h2>
          <h2 className="py-2 ">Capacity</h2>
          <h2 className="py-2 ">Discount</h2>
          <h2 className="py-2 ">Price</h2>
        </div>
        <CabinsRow/>
        <CabinsRow/>
        <CabinsRow/>
        <CabinsRow/>
      </div>
    </div>
  );
}

export default Cabins;
