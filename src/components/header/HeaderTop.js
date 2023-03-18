import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import { Link } from "react-router-dom";
const HeaderTop = ({
  strings,
  currentLanguageCode,
  dispatch,
  borderStyle
}) => {
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
      }`}
    >
      <LanguageCurrencyChanger
        currentLanguageCode={currentLanguageCode}
        dispatch={dispatch}
      />
       <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </Link>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
  strings: PropTypes.object
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  };
};

export default connect(
  mapStateToProps,
)(multilanguage(HeaderTop));
