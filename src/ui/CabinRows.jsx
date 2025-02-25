import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../services/apiCabin';
import toast from 'react-hot-toast';
import CreateCabinForm from './CreateCabinForm';

function CabinRows({ cabin }) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success('Cabin successfully deleted');
      queryClient.invalidateQueries('cabins');
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <div>
      <div className=" border m-2 grid grid-cols-5 p-2 gap-10">
        <img height="100px" width="100px" src={cabin.image} alt="cabin" />
        <h1>{cabin.id}</h1>
        <p>{cabin.maxCapacity}</p>
        <p>{cabin.description}</p>
        <p>{cabin.regularPrice}</p>
        <p>{cabin.discount}</p>
        <button
          className="p-2 bg-gray-400 border hover:bg-red-800 hover:text-white cursor-pointer  "
          onClick={() => mutate(cabin.id)}
          disabled={isDeleting}
        >
          Delete
        </button>
      </div>
      <CreateCabinForm/>
    </div>
  );
}

export default CabinRows;
