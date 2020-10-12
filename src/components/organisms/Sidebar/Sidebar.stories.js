import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Sidebar from "./Sidebar";
// import { withKnobs } from "@storybook/addon-knobs";
// import { addDecorator } from "@storybook/react";

storiesOf("Organisms/Sidebar", module)
  .addDecorator(StoryRouter())
  .add("Normal", () => <Sidebar />);
