import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createCabin } from '../services/apiCabin';
import toast from 'react-hot-toast';

function CreateCabinForm() {
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New Cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div>
      <form
        className="space-y-4 bg-gray-400 border p-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex gap-5">
          <label htmlFor="name">Cabin Name</label>
          <input
            className="border"
            type="text"
            id="name"
            {...register('name', {
              required: 'Name is required',
            })}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input
            className="border"
            type="number"
            id="maxCapacity"
            {...register('maxCapacity', {
              required: 'Maximum capacity is required',
            })}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="regularPrice">Regular Price</label>
          <input
            className="border"
            type="text"
            id="regularPrice"
            {...register('regularPrice', {
              required: 'Maximum capacity is required',
            })}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="image">Upload Photo</label>
          <input
            className="border"
            type="number"
            id="photo"
            {...register('image')}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="description">Description</label>
          <textarea
            className="border"
            name=""
            id="description"
            {...register('description', {
              required: 'Description is required',
            })}
          ></textarea>
        </div>
        <div className="flex gap-5">
          <label htmlFor="discount">Discount</label>
          <input
            className="border"
            type="number"
            id="discount"
            {...register('discount', {
              required: 'discount  is required',
            })}
          />
        </div>
        <button
          disabled={isCreating}
          className="p-2 bg-blue-400 rounded-full "
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateCabinForm;
