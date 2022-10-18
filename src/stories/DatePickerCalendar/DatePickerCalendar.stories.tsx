import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import DatePickerCalendar from '../../components/DatePicker/DatePickerCalendar';
import DateFieldSchema from '../../schema/DateFieldSchema';

export default {
  title: 'Components/DatePickerCalendar',
  component: DatePickerCalendar,
  argTypes: {
    label: { control: 'text' },
  },
} as ComponentMeta<typeof DatePickerCalendar>;

const Template: ComponentStory<typeof DatePickerCalendar> = (args) => {
  const { control } = useForm({
    resolver: yupResolver(DateFieldSchema),
    mode: 'all',
  });
  return <DatePickerCalendar {...args} name={'startDate'} control={control} />;
};
export const Default = Template.bind({});
Default.args = {
  label: 'Start Date',
  dateValue: new Date(),
};
