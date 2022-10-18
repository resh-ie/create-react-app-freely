import * as yup from 'yup';

import yesterdayDate from '../utils/yesterdayDate';

const DateFieldSchema = yup
  .object({
    name: yup.string().required(),
    startDate: yup
      .date()
      .nullable()
      .typeError('The value must be a date (YYYY-MM-DD)')
      .required('Start date is required')
      .min(yesterdayDate, 'Start date can not be in the past'),
  })
  .required();

export default DateFieldSchema;
