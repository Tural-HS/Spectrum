import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import "./style.scss";
import azeflag from "../../images/languages/aze2.png";
import ruflag from "../../images/languages/rus.png";
import trflag from "../../images/languages/tr.png";

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  const options = [
    {
      value: "aze",
      label: <img src={azeflag} width="20" alt="" />,
    },
    {
      value: "tr",
      label: <img src={trflag} width="20" alt="" />,
    },
    {
      value: "ru",
      label: <img src={ruflag} width="20" alt="" />,
    },
  ];

  const [lang, setLang] = useState("en");
  const [langLabel, setLangLabel] = useState(options[0].label);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function handleDropdownClick() {
    setDropdownVisible(!dropdownVisible);
  }

  function handleItemClick(value, label) {
    setLang(value);
    setLangLabel(label);
    setDropdownVisible(false);
  }
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerBottomMainWrapper">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
            </div>
            <div
              className={
                responsive
                  ? "col-lg-8 responsiveWrapper active"
                  : "col-lg-8 responsiveWrapper"
              }
            >
              <ul className="mainMenuWrap">
                <li>
                  <NavLink exact to="/">
                    Əsas səhifə
                  </NavLink>
                  {/* <ul className="subMenu">
                    <li>
                      <NavLink exact to="/">
                        Home One
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/home-two">
                        Home Two
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/home-three">
                        Home Three
                      </NavLink>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <NavLink exact to="/about">
                    Haqqında
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/practice-details">
                    FƏALİYYƏT SAHƏLƏRİ
                  </NavLink>
                  {/* <ul className="subMenu">
                    <li>
                      <NavLink exact to="/practice">
                        Practice areas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Practice areas single
                      </NavLink>
                    </li>
                  </ul> */}
                </li>

                {/* <li>
                  <NavLink exact to="/case-stadies">
                    Cases
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/case-stadies">
                        Cases
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/case-stadies-details">
                        Case single
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <NavLink exact to="/blog-left">
                    News
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/blog-left">
                        Blog left sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/blog-right">
                        Blog Right sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/blog-fullwidth">
                        Blog FullWidth
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <NavLink exact to="/attorneys">
                    Attorneys
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/attorneys">
                        Attorneys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/attorneys-single">
                        Attorneys single
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <NavLink exact to="/contact">
                    Əlaqə
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
              <div className="searchMenuWrapper">
                <div className="searchWrap">
                  {/* <i onClick={clickHandler} className="fa fa-search"></i>
                  <div className={trigger ? "searchform active" : "searchform"}>
                    <form onSubmit={submitHandler}>
                      <input
                        placeholder="search here"
                        value={search}
                        type="text"
                        onChange={(event) => setSearch(event.target.value)}
                      />
                      <button>
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div> */}{" "}
                  <div className="App">
                    <div className="custom-dropdown">
                      <button
                        className="dropdown-toggle"
                        onClick={handleDropdownClick}
                      >
                        {langLabel}
                      </button>
                      {dropdownVisible && (
                        <div className="dropdown-menu">
                          {options.map((option, index) => (
                            <div
                              key={index}
                              className="dropdown-item"
                              onClick={() =>
                                handleItemClick(option.value, option.label)
                              }
                            >
                              {option.value}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div onClick={responsiveHandler} className="responsiveTrigger">
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
