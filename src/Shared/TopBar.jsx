import React from "react";
import { useSelector } from "react-redux";
import { switchLanguageAction } from "../Redux/Translations/Actions";
import { switchCoinsAction } from "../Redux/Coins/Actions";
import DropDown from "./DropDown";
import arrow_down from "../assets/arrow_down.svg";

const TopBar = () => {
  //States
  const lang = useSelector((state) => state.translation);
  const coins = useSelector((state) => state.coins);
  return (
    <div id="topBar">
     <div className="topDropDowns">
     <DropDown
        list={lang.languages}
        action={switchLanguageAction}
        id="languages"
        state={lang.selectedLanguage}
        storagekey="lang"
        value="EN"
      >
        <a href="#">
          {lang.selectedLanguage}
          <img src={arrow_down} alt="arrow down" />
        </a>
      </DropDown>
      <DropDown
        list={coins.coins}
        action={switchCoinsAction}
        state={coins.selectedCoin}
        id="coins"
        storagekey="coin"
        value="USD"

      >
        <a href="#">
          {coins.selectedCoin}
          <img src={arrow_down} alt="arrow down" />
        </a>
      </DropDown>
      <p>Call Us 3965410</p>

     </div>
     <p>
     Free delivery on order over <a href="#">£0.00</a>
     </p>
    </div>
  );
};

export default TopBar;
