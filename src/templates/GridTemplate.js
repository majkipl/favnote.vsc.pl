import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import UserPageTemplate from "templates/UserPageTemplate";
import withContext from "hoc/withContext";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import plusIcon from "assets/icons/plus.svg";
import NewItemBar from "components/organisms/NewItemBar/NewItemBar";
import { render } from "@testing-library/react";

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px 0;

  @media ${({ theme }) => theme.device.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  @media ${({ theme }) => theme.device.xl} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;
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

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-size: 35%;
  z-index: 10000;
  /*transform: rotate(45deg);*/
`;

class GridTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewItemBarVisible: false,
    };
  }

  toggleNewItemBar = () =>
    this.setState((prevState) => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <>
        <UserPageTemplate>
          <StyledWrapper>
            <StyledPageHeader>
              <Input search placeholder="Search" />
              <StyledHeading big as="h1">
                {pageContext}
              </StyledHeading>
              <StyledParagraph>6 {pageContext}</StyledParagraph>
            </StyledPageHeader>
            <StyledGrid>{children}</StyledGrid>
            <StyledButtonIcon
              activeColor={pageContext}
              icon={plusIcon}
              onClick={this.toggleNewItemBar}
            />
            <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
          </StyledWrapper>
        </UserPageTemplate>
      </>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

GridTemplate.defaultProps = {
  pageContext: "notes",
};

export default withContext(GridTemplate);
