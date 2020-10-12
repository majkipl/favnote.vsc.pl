import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : "white")};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 5px;
`;

const StyleHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = ({ cardType }) => {
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyleHeading>Hello amarello</StyleHeading>
        <DateInfo>3 days</DateInfo>
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit aliquet diam
          dignissim posuere. Donec tristique accumsan ipsum, et posuere ipsum viverra ut. Mauris
          aliquet turpis sed condimentum tincidunt. Cras vel lectus et ipsum vestibulum convallis
          nec ut erat. Praesent tristique vel nisi id lobortis. Donec venenatis in risus at iaculis.
          Praesent quis egestas massa. Sed et dictum sem. Quisque a felis nisi.
        </Paragraph>
        <Button secondary>REMOVE</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
};

Card.defaultProps = {
  cardType: "note",
};

export default Card;
