import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

// export const Outline: Story = {
//   args: {
//     variant: "outline",
//     children: "Button",
//   },
// };

// export const Ghost: Story = {
//   args: {
//     variant: "ghost",
//     children: "Button",
//   },
// };
