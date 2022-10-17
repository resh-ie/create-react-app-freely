import { ComponentMeta, ComponentStory } from '@storybook/react';

import DatePickerCalendar from '../../components/DatePicker/DatePickerCalendar';

export default {
  title: 'Components/DatePickerCalendar',
  component: DatePickerCalendar,
  argTypes: {},
} as ComponentMeta<typeof DatePickerCalendar>;

const Template: ComponentStory<typeof DatePickerCalendar> = (args) => (
  <DatePickerCalendar {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: 'Start Date',
  dateValue: new Date(),
};
