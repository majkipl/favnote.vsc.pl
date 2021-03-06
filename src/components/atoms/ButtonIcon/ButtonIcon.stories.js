import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import bulbIcon from "assets/icons/bulb.svg";
import logoutIcon from "assets/icons/logout.svg";
import penIcon from "assets/icons/pen.svg";
import plusIcon from "assets/icons/plus.svg";
import twitterIcon from "assets/icons/twitter.svg";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";

const BackgroundColorNote = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.note};
`;

export default {
  component: ButtonIcon,
  title: "Atoms/ButtonIcon",
  decorators: [
    withKnobs,
    (Story) => (
      <BackgroundColorNote>
        <Story />
      </BackgroundColorNote>
    ),
  ],
};

export const Bulb = () => <ButtonIcon icon={bulbIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
export const Active = () => <ButtonIcon active icon={bulbIcon} />;
