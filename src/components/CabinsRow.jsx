import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../api/apiCabin';
import toast from 'react-hot-toast';

function CabinsRow({ cabin }) {
  console.log(cabin);
  const { id, name, description, maxCapacity, discount } = cabin;
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries('cabins');
      toast('Cabin deleted successfully');
    },
    onError: (error) => toast.error(error.message),
  });
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center items-center">
        <div className="justify-self-start flex gap-2 items-center">
          <div className="h-10  bg-blue-800 w-15  "></div>
          <span>{name}</span>
        </div>
        <p>{description}</p>
        <p>{discount} </p>
        <div className="flex gap-2 items-center">
          <p>250</p>
          <button
            disabled={isDeleting}
            onClick={() => mutate(id)}
            className="bg-blue-400 rounded-full py-1 px-2"
          >
            Delete
          </button>
        </div>
      </div>

      <p></p>
    </div>
  );
}

export default CabinsRow;
