import { ComponentMeta, ComponentStory } from '@storybook/react';

import TripForm from '../../components/Forms/TripForm';

export default {
  title: 'Components/Forms',
  component: TripForm,
  argTypes: {},
} as ComponentMeta<typeof TripForm>;

const Template: ComponentStory<typeof TripForm> = () => <TripForm />;
export const Default = Template.bind({});
