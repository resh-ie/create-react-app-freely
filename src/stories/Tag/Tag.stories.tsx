import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from '../../components/Tag/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      control: 'select',
      options: ['NOT_STARTED', 'STARTED', 'FINISHED'],
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'NOT_STARTED',
};
