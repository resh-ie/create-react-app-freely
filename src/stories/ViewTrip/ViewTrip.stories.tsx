import { ComponentMeta, ComponentStory } from '@storybook/react';

import ViewTrip from '../../components/ViewTrip/ViewTrip';

export default {
  title: 'Components/ViewTrip',
  component: ViewTrip,
  argTypes: {},
} as ComponentMeta<typeof ViewTrip>;

const Template: ComponentStory<typeof ViewTrip> = (args) => (
  <ViewTrip {...args} />
);
export const Default = Template.bind({});
Default.args = {
  name: 'Trip to the moon',
  startDate: '2021-01-01',
  endDate: '2021-01-01',
  status: 'Not started',
  destinations: ['Moon', 'Mars'],
};
