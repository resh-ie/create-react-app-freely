import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Textfield from '../Textfield/Textfield';

// TODO: Move this to a separate file and create a start and end Date component
const schema = yup
  .object({
    title: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    destination: yup.array().of(
      yup.object({
        name: yup.string().required('Destination is required'),
      })
    ),
  })
  .required();

const TripForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: 'My Trip',
      // TODO: Add default values for dates to be today and tomorrow
      startDate: '2021-01-01',
      endDate: '2021-01-01',
      destination: [{ name: '' }],
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'destination',
  });

  const maxDestinations = 5;

  const submitTrip = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitTrip)}>
      <Textfield
        label='Title'
        name='title'
        value=''
        register={register}
        error={errors?.title?.message}
      />
      <Textfield
        label='Start Date'
        name='startDate'
        value=''
        register={register}
        error={errors?.startDate?.message}
      />
      <Textfield
        label='End Date'
        name='endDate'
        value=''
        register={register}
        error={errors?.endDate?.message}
      />

      <div>
        {fields.map((item, index) => {
          const destinationError = errors?.destination;
          return (
            <div key={item.id}>
              <p>Destination</p>
              <Controller
                render={({ field }) => (
                  <Textfield
                    register={register}
                    error={destinationError?.[index]?.name?.message}
                    {...field}
                  />
                )}
                name={`destination.${index}.name`}
                control={control}
              />
              {index > 0 && (
                <button type='button' onClick={() => remove(index)}>
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </div>
      {fields.length < maxDestinations && (
        <button type='button' onClick={() => append({ name: '' })}>
          append
        </button>
      )}

      <input type='submit' />
    </form>
  );
};

export default TripForm;
