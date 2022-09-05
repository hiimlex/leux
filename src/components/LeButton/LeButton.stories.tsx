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

export const Basic = Template.bind({});
Basic.args = {
	label: "Basic",
	size: "small",
	variant: "primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Disabled",
	size: "medium",
	variant: "danger",
	state: {
		disabled: true,
	},
};

export const Complete = Template.bind({});
Complete.args = {
	label: "Complete",
	size: "large",
	type: "filled",
	variant: "success",
	onClick: () => {
		alert("Clicked");
	},
};
