import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserPageTemplate from "templates/UserPageTemplate";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const DetailsTemplate = ({ pageType, title, created, content, articleUrl, twitterName }) => {
  return (
    <>
      <UserPageTemplate pageType={pageType}>
        <StyledWrapper>
          <StyledPageHeader>
            <StyledHeading big as="h1">
              {title}
            </StyledHeading>
            <StyledParagraph>{created}</StyledParagraph>
          </StyledPageHeader>

          <Paragraph>{content}</Paragraph>

          {pageType === "articles" && (
            <StyledLink href={articleUrl} title={title}>
              Open this article
            </StyledLink>
          )}

          {pageType === "twitters" && (
            <StyledImage alt={title} src={`https://unavatar.now.sh/${twitterName}`} />
          )}

          <Button as={Link} to={`/${pageType}`} activeColor={pageType}>
            save / close
          </Button>
        </StyledWrapper>
      </UserPageTemplate>
    </>
  );
};

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  articleUrl: "",
  twitterName: "",
};

export default DetailsTemplate;
