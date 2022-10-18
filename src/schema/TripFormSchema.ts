import * as yup from 'yup';

import yesterdayDate from '../utils/yesterdayDate';

const TripFormSchema = yup
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
      .typeError('The value must be a date (YYYY-MM-DD)')
      .min(yup.ref('startDate'), 'End Date must be after Start Date'),

    destination: yup.array().of(
      yup.object({
        name: yup.string().required('Destination is required'),
      })
    ),
  })
  .required();

export default TripFormSchema;
