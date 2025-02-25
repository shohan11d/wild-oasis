import { useForm } from 'react-hook-form';
import { Form } from 'react-router';

function CreateCabinForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Cabin name</p>
          <input
            className="border"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
        <div>
          <p>Cabin name</p>
          <input
            className="border"
            type="text"
            id="maxCapacity"
            {...register('maxCapacity')}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreateCabinForm;
