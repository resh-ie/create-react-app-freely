import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from '../../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    startDate: { control: 'text' },
    endDate: { control: 'text' },
    status: { control: 'text' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Card title',
  startDate: '2021-01-01',
  endDate: '2021-01-01',
  status: 'Not started',
};
