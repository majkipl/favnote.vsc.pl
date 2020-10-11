import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Input from "./Input";

export default {
  component: Input,
  title: "Input",
  decorators: [withKnobs],
};

export const Normal = () => {
  return <Input placeholder="login" />;
};

export const Search = () => {
  return <Input search placeholder="search" />;
};
