import { ComponentMeta,ComponentStory } from "@storybook/react";

import Textfield from "../../components/Textfield/Textfield";

export default {
  title: 'Components/Textfield',
  component: Textfield,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => <Textfield {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Textfield',
  value: 'Textfield value',
};
