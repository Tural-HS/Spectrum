import React from "react";
import "./style.scss";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Bakı,
                  Xətai r-nu, AZ1025, İzzət Orucova küç., 16/22
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-12">
              {/* <div className="btnStyle btnStyle2 text-right">
                <a href="#">Free Consultation</a>
              </div> */}
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-5">
              <ul className="headerContact">
                <li>
                  <i className="fa fa-phone"></i> +994 50 283 82 02
                </li>
                {/* <li>
                  <i className="fa fa-clock-o"></i> 9AM - PM
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
