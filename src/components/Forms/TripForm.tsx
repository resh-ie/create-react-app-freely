import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import DatePickerCalendar from '../DatePicker/DatePickerCalendar';
import Textfield from '../Textfield/Textfield';
import { tripAtom } from '../../atoms/tripAtom';

// TODO: Move this to a separate file and create a start and end Date component
const schema = yup
  .object({
    name: yup.string().required(),
    startDate: yup.date().nullable().required('Start date is required'),
    endDate: yup.date().nullable().required('End date is required'),
    destination: yup.array().of(
      yup.object({
        name: yup.string().required('Destination is required'),
      })
    ),
  })
  .required();

const TripForm = () => {
  const maxDestinations = 5;
  const [trip, setTrip] = useAtom(tripAtom);
  const maxID = Math.max(...trip.map((d) => parseInt(d.id)), 0);
  console.log('maxID', maxID);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      id: '',
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

  const submitTrip = (data: any) => {
    setTrip([
      ...trip,
      { ...data, id: (maxID + 1).toString(), status: 'NOT_STARTED' },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(submitTrip)}>
      {isSubmitSuccessful && (
        <div className='success'>Form submitted successfully</div>
      )}

      {errors && <div className='error'>Form has errors</div>}

      <Textfield
        label='Title'
        name='name'
        value=''
        register={register}
        error={errors?.title?.message}
      />
      {/* <Textfield
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
      /> */}
      <DatePickerCalendar
        label='Start Date'
        name='startDate'
        dateValue={new Date()}
        // register={register}
        // error={errors?.startDate?.message}
        control={control}
      />
      <DatePickerCalendar
        label='End Date'
        name='endDate'
        dateValue={new Date()}
        // register={register}
        // error={errors?.endDate?.message}
        control={control}
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
