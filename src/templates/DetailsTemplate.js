import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import UserPageTemplate from "templates/UserPageTemplate";

const DetailsTemplate = ({ children, pageType }) => {
  return (
    <>
      <UserPageTemplate pageType={pageType}>
        {children}
        <Link to="/">go back</Link>
      </UserPageTemplate>
    </>
  );
};

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailsTemplate;
