import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';

import style from './_tripForm.module.scss';
import PrimaryButton from '../Button/Button';
import DatePickerCalendar from '../DatePicker/DatePickerCalendar';
import MultipleTextfield from '../MultipleTextfield/MultipleTextfield';
import Textfield from '../Textfield/Textfield';
import Toast from '../Toast/Toast';
import { tripAtom } from '../../atoms/tripAtom';

// TODO: Move this to a separate file and create a start and end Date component
const yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);

const schema = yup
  .object({
    name: yup.string().required(),
    startDate: yup
      .date()
      .nullable()
      .typeError('The value must be a date (YYYY-MM-DD)')
      .required('Start date is required')
      .min(yesterdayDate, 'Start date can not be in the past')
      .max(yup.ref('endDate'), 'Start Date must be before End Date'),
    endDate: yup
      .date()
      .nullable()
      .required('End date is required')
      // .min(yesterdayDate, 'End date can not be in the past')
      .typeError('The value must be a date (YYYY-MM-DD)')
      .min(yup.ref('startDate'), 'End Date must be after Start Date'),

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

  const maxID = Math.max(...trip.map((d: any) => parseInt(d.id)), 0);
  const tripID = maxID + 1;
  const defaultName = `Trip ${tripID}`;
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      id: (tripID).toString(),
      name: defaultName,
      startDate: new Date(),
      endDate: new Date(),
      destination: [{ name: '' }],
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'destination',
  });
  const location = useLocation();

  const errorMessageOnSubmit = `Please resolve the following errors: ${
    errors.name?.message && errors.name?.message
  }, ${errors.startDate?.message && errors.startDate?.message}, ${
    errors.endDate?.message
  }, ${
    errors?.destination &&
    errors?.destination?.map?.((d: any) => d?.name?.message)
  }`;

  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState({
    severity: 'info' as 'error' | 'success' | 'info' | 'warning',
    message: '',
  });

  const submitTrip = (data: any) => {
    setTrip([
      ...trip,
      {
        id: (tripID).toString(),
        name: data.name,
        destinations: data.destination.map((d: any) => d.name),
        startDate: data.startDate.toISOString().split('T')[0],
        endDate: data.endDate.toISOString().split('T')[0],
        status: 'NOT_STARTED',
      },
    ]);
    setIsToastOpen(true);
    setToastContent({
      severity: 'success',
      message: 'Trip added successfully',
    });
    reset({
      id: (tripID + 1).toString(),
      name: defaultName,
      startDate: new Date(),
      endDate: new Date(),
      destination: [{ name: '' }],
    });
  };

  useEffect(() => {
    console.log('location', location);
    setTrip([
      ...trip,
      {
        id: (maxID + 1).toString(),
        name: watch('name'),
        destinations: watch('destination').map((d) => d.name) || [],
        startDate: watch('startDate').toISOString().split('T')[0],
        endDate: watch('endDate').toISOString().split('T')[0],
        status: 'NOT_STARTED',
      },
    ]);
  }, [location]);

  return (
    <Container component='main' maxWidth='lg' sx={{ mb: 10 }}>
      <Paper
        variant='outlined'
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <form onSubmit={handleSubmit(submitTrip)}>
          {isToastOpen && (
            <Toast
              severity={toastContent.severity}
              message={toastContent.message}
              isOpen={isToastOpen}
              setIsOpen={setIsToastOpen}
            />
          )}

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Textfield
                label='Title'
                name='name'
                value=''
                register={register}
                error={errors?.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePickerCalendar
                label='Start Date'
                name='startDate'
                dateValue={new Date()}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePickerCalendar
                label='End Date'
                name='endDate'
                dateValue={new Date()}
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleTextfield
                label='Destinations'
                fields={fields}
                control={control}
                append={append}
                remove={remove}
                register={register}
                error={errors?.destination}
                maxLimit={maxDestinations}
                name='destination'
                deleteLabel='Delete'
                appendLabel='Add Destination'
              />
            </Grid>
          </Grid>
          <div className={style.tripFormFooter}>
            <PrimaryButton
              type='submit'
              varient={'contained'}
              disabled={isSubmitting}
              label={'Submit'}
              onClick={() => {
                setToastContent({
                  severity: 'error',
                  message: errorMessageOnSubmit,
                });
                setIsToastOpen(true);
              }}
            />
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default TripForm;
