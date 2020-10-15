import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
// import styled from "styled-components";
// import Input from "components/atoms/Input/Input";
// import Heading from "components/atoms/Heading/Heading";
// import Paragraph from "components/atoms/Paragraph/Paragraph";

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
/*
UserPageTemplate.defaultProps = {
  pageType: "notes",
};
*/
export default UserPageTemplate;
