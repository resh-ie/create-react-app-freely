import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavBar from "../../components/NavBar/NavBar";
import { NavData } from "../../components/NavBar/NavData";
export default {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {
    navData: { control: "object" },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;
export const Default = Template.bind({});
Default.args = {
  navData: NavData
};