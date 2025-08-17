import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import React, { useState } from "react";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputField label="Outlined" placeholder="Outlined input" variant="outlined" />
      <InputField label="Filled" placeholder="Filled input" variant="filled" />
      <InputField label="Ghost" placeholder="Ghost input" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputField label="Small" placeholder="Small" size="sm" />
      <InputField label="Medium" placeholder="Medium" size="md" />
      <InputField label="Large" placeholder="Large" size="lg" />
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Search",
    placeholder: "Searching…",
    loading: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};

export const Clearable: Story = {
  render: () => {
    const [val, setVal] = useState("Clear me");
    return (
      <InputField
        label="With Clear Button"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        allowClear
      />
    );
  },
};
