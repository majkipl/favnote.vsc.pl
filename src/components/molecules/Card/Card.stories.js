import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Card from "./Card";

export default {
  component: Card,
  title: "Molecules/Card",
  decorators: [withKnobs],
};

export const Normal = () => <Card>Hello</Card>;
export const Note = () => <Card cardType="note">Hello</Card>;
export const Twitter = () => <Card cardType="twitter">Hello</Card>;
export const Article = () => <Card cardType="article">Hello</Card>;
