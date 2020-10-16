import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import withContext from "hoc/withContext";
import Heading from "components/atoms/Heading/Heading";
import { connect } from "react-redux";
import { addItem as addItemAction } from "actions";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? "0%" : "100%")});
  transition: transform 0.3s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 10px;
  height: 30vh;
  margin: 0 0 100px;
`;

const StyledInput = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 30px;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => {
  return (
    <>
      <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
        <Heading big>Create New {pageContext}</Heading>
        <Formik
          initialValues={{ title: "", content: "", articleUrl: "", twitterName: "", created: "" }}
          onSubmit={(values) => {
            console.log(values);
            addItem(pageContext, values);
            handleClose();
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <StyledForm>
              <StyledInput
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {pageContext === "twitters" && (
                <StyledInput
                  type="text"
                  name="twitterName"
                  placeholder="account name eg. reactjs"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitterName}
                />
              )}
              {pageContext === "articles" && (
                <StyledInput
                  type="text"
                  name="articleUrl"
                  placeholder="link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleUrl}
                />
              )}
              <StyledTextArea
                name="content"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <Button type="submit" activeColor={pageContext}>
                Add Note
              </Button>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    </>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: "notes",
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

/*
{
  return {
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
  };
};
*/
export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
