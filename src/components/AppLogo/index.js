import React from "react";
import PropTypes from "prop-types";
import { StyledAppLogo } from "./index.styled";
import AppImage from "../AppImage";

const AppLogo = () => {

  return (
    <StyledAppLogo>
        <AppImage src='/assets/images/FlightSearch.png' alt='E-Ticaret' />
    </StyledAppLogo>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
