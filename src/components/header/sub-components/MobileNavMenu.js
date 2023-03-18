import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { getAllCategories } from "../../../redux/actions/category";
import { useSelector, useDispatch } from "react-redux";

const MobileNavMenu = ({ strings }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  React.useEffect(() => {
    getAllCategories(dispatch);
  }, []);
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/about"}>
            {strings["about_us"]}
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop"}>{strings["shop"]}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link>{strings["categories"]}</Link>
          <ul className="sub-menu">
            {category &&
              category?.map((el) => (
                <li key={el._id}>
                  <Link to={process.env.PUBLIC_URL + `/shop/${el.name}`}>
                    {el.name}
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/login-register"}>
            {strings["login_register"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);
