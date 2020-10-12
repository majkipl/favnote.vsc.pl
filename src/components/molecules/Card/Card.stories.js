import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Card from "./Card";

export default {
  component: Card,
  title: "Card",
  decorators: [withKnobs],
};

export const Normal = () => <Card>Hello</Card>;
