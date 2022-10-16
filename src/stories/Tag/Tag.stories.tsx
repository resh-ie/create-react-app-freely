import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tag from "../../components/Tag/Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Not started",
};