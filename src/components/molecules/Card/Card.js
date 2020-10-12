import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/link.svg";

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
  position: relative;

  :first-of-type {
    z-index: 9;
  }

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

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  width: 47px;
  display: block;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => {
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyleHeading>{title}</StyleHeading>
        <DateInfo>{created}</DateInfo>
        {cardType === "twitter" && (
          <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />
        )}
        {cardType === "article" && <StyledLinkButton href={articleUrl} target="_blank" />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button secondary>REMOVE</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: "note",
  twitterName: null,
  articleUrl: null,
};

export default Card;
