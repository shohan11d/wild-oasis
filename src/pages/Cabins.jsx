import { useMutation, useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/apiCabin';
import CabinRows from '../ui/CabinRows';
import CabinHeader from '../ui/CabinHeader';

function Cabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
  console.log(cabins)

 
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="flex gap-5 p-2 border m-2">
        <h1>All cabins</h1>
        <p>filter/sort</p>
      </div>
      <div>
        <CabinHeader />
        {cabins.map((cabin) => (
          <CabinRows cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </div>
  );
}

export default Cabins;
