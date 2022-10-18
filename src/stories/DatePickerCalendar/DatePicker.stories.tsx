import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import DatePickerCalendar from '../../components/DatePicker/DatePickerCalendar';
import TripFormSchema from '../../schema/TripFormSchema';

export default {
  title: 'Components/DatePickerCalendar',
  component: DatePickerCalendar,
  argTypes: {},
} as ComponentMeta<typeof DatePickerCalendar>;

const Template: ComponentStory<typeof DatePickerCalendar> = (args) => {
  const {
    control,
  } = useForm({
    resolver: yupResolver(TripFormSchema),
    mode: 'all',
  });
  return <DatePickerCalendar {...args} name={'startDate'} control={control} />;
};
export const Default = Template.bind({});
Default.args = {
  label: 'Start Date',
  dateValue: new Date(),
};
