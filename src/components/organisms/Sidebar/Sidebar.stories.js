import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import Sidebar from "./Sidebar";

/*
storiesOf("Organisms/Sidebar", module)
  .addDecorator(StoryRouter())
  .add("Normal", () => <Sidebar />);
*/

export default {
  component: Sidebar,
  title: "Organisms/Sidebar",
  decorators: [withKnobs],
};

addDecorator(StoryRouter());

export const Normal = () => <Sidebar pageType="notes" />;
