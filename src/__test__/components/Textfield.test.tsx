import { yupResolver } from '@hookform/resolvers/yup';
import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import DatePickerCalendar from '../../components/DatePicker/DatePickerCalendar';
import TripFormSchema from '../../schema/TripFormSchema';

const DatePickerCalendarTest = () => {
  const { control } = useForm({
    resolver: yupResolver(TripFormSchema),
    mode: 'all',
  });
  return (
    <DatePickerCalendar
      name={'startDate'}
      control={control}
      label={'Start Date'}
      dateValue={new Date()}
    />
  );
};
describe('DatePickerCalendar component', () => {
  it('should render the component with a value', () => {
    render(<DatePickerCalendarTest />);
    const datePickerCalendar = screen.findByText('Start Date');
    expect(datePickerCalendar).toBeTruthy();
  });
});
