import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";
import BannerSidebar from "../../../components/BannerSidebar";
import FerdiContentArea from "../../../components/FerdiContentArea";

// images
import breadcumb from "../../../images/breadcumb/1.jpeg";
import banner from "../../../images/practice/2.jpg";
import single from "../../../images/practice/ferdi.webp";

import "./style.scss";

const breadcumbMenu = [
  { name: "Əsas Səhifə", route: "/" },
  { name: "Fəaliyyət Sahələri", route: "/practice-details" },
  { name: "Fərdi müştərilər" },
];

const PracticeFerdi = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Fərdi müştərilər"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      <div className="singleArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <aside className=" pr25">
                {/* <BannerSidebar image={banner} className="bannerWrapper" /> */}
                <CetagorySidebar title="Category" className="cetagoryWrap" />
              </aside>
            </div>
            <div className="col-lg-8">
              <FerdiContentArea
                className="singleContentArea"
                image={single}
                avatar={true}
              />
            </div>
          </div>
        </div>
      </div>
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default PracticeFerdi;