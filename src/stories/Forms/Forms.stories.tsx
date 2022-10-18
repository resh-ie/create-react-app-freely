import { ComponentMeta, ComponentStory } from '@storybook/react';

import TripForm from '../../components/Forms/TripForm';

export default {
  title: 'Components/Forms',
  component: TripForm,
  argTypes: {
    label: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof TripForm>;

const Template: ComponentStory<typeof TripForm> = (args) => (
  <TripForm {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: 'Welcome to Freely',
};
