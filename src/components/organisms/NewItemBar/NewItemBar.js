import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import withContext from "hoc/withContext";
import Heading from "components/atoms/Heading/Heading";

const StyledWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  z-index: 9999;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const StyledTextArea = styled(Input)`
  border-radius: 10px;
  height: 30vh;
  margin: 30px 0 100px;
`;

const StyledInput = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const NewItemBar = ({ pageContext }) => {
  return (
    <>
      <StyledWrapper activeColor={pageContext}>
        <Heading big>Create New {pageContext}</Heading>
        <StyledInput placeholder="title" />
        <StyledTextArea placeholder="Content" as="textarea" />
        <Button activeColor={pageContext}>Add Note</Button>
      </StyledWrapper>
    </>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

NewItemBar.defaultProps = {
  pageContext: "notes",
};

export default withContext(NewItemBar);
