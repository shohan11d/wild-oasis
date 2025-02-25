import { useForm } from 'react-hook-form';
import { Form } from 'react-router';

function CreateCabinForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <form
        className="space-y-4 bg-gray-400 border p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-5">
          <label htmlFor="name">Cabin Name</label>
          <input
            className="border"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input
            className="border"
            type="number"
            id="maxCapacity"
            {...register('maxCapacity')}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="regularPrice">Regular Price</label>
          <input
            className="border"
            type="text"
            id="regularPrice"
            {...register('regularPrice')}
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
            {...register('description')}
          ></textarea>
        </div>
        <div className="flex gap-5">
          <label htmlFor="discount">Discount</label>
          <input
            className="border"
            type="number"
            id="discount"
            {...register('discount')}
          />
        </div>
        <button className="p-2 bg-blue-400 rounded-full " type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateCabinForm;
