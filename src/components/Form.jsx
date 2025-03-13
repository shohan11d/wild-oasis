import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createEditCabin } from '../api/apiCabin';
import toast from 'react-hot-toast';

function Form({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editValues : {} });
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('Cabin created successfully');
      queryClient.invalidateQueries('cabins');
      reset();
    },
    onError: (error) => toast.error(error.message),
  });
  const [showForm, setShowForm] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  // console.log(watch(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" grid  bg-neutral-600 p-5 gap-5  rounded-md "
    >
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="name">Name</label>
        <input {...register('name')} type="text" id="name" className="border" />
      </div>
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="id">id</label>
        <input type="number" id="id" className="border" {...register('id')} />
      </div>{' '}
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          className="border"
          {...register('description')}
        />
      </div>{' '}
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="maxCapacity">maxCapacity</label>
        <input
          type="number"
          id="maxCapacity"
          className="border"
          {...register('maxCapacity')}
        />
      </div>
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="discount">discount</label>
        <input
          type="number"
          id="discount"
          className="border"
          {...register('discount')}
        />
      </div>
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="regularPrice">regularPrice</label>
        <input
          type="number"
          id="regularPrice"
          className="border"
          {...register('regularPrice')}
        />
      </div>
      <div className="grid grid-cols-[.5fr_2fr]">
        <label htmlFor="image">image</label>
        <input
          type="file"
          id="image"
          className="border"
          {...register('image')}
        />
      </div>
      <input type="submit" />
    </form>
  );
}

export default Form;
