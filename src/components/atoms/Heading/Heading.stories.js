import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Heading from "./Heading";

export default {
  component: Heading,
  title: "Heading",
  decorators: [withKnobs],
};

export const Normal = () => {
  return <Heading>Hello amarello.</Heading>;
};

export const Big = () => {
  return <Heading big>Hello amarello.</Heading>;
};
