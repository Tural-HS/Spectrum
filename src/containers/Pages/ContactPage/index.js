import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import Form from "../../../components/Form";
// images
import breadcumb from "../../../images/breadcumb/1.jpeg";

import "./style.scss";

const breadcumbMenu = [{ name: "Əsas Səhifə", route: "/" }, { name: "Ələqə" }];

const ContactPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Əlaqə"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />

      <div className="contactusPageArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contactUsInfo">
                <h3>Our Contacts</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <h4>Ünvan</h4>
                <span>
                  {" "}
                  Bakı, Xətai r-nu, AZ1025, İzzət Orucova küç., 16/22
                </span>
                <h4>Əlaqə nömrəsi</h4>
                <span> +994 50 283 82 02</span>
                {/* <span>0-123-456-7890</span> */}
                <h4>Email</h4>
                <span>sample@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3>Quick Contact Form</h3>
                <Form addressInfo={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <NewsLetter className="newsLetterArea" /> */}
      <FooterArea />
    </Fragment>
  );
};
export default ContactPage;
