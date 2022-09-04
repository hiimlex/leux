import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LeButton from "./LeButton";

export default {
	title: "Leux/LeButton",
	component: LeButton,
} as ComponentMeta<typeof LeButton>;

const Template: ComponentStory<typeof LeButton> = (args) => (
	<LeButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
	label: "Primary",
	size: "medium",
	variant: "primary",
};
