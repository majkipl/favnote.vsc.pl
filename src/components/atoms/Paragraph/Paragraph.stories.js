import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Paragraph from "./Paragraph";

export default {
  component: Paragraph,
  title: "Paragraph",
  decorators: [withKnobs],
};

export const Normal = () => {
  return <Paragraph>Hello amarello.</Paragraph>;
};
