import { ComponentMeta, ComponentStory } from '@storybook/react';

import Toast from '../../components/Toast/Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});

Default.args = {
  severity: 'error',
  message: 'This is an error message',
  isOpen: true,
  setIsOpen: () => '',
};
