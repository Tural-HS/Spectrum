import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "İstifdə/lizinq hüquqlarının verilməsi",
  "Hüquqların güzəşti",
  "Birgə təhqiqatlar",
  "Patenlər",
  "Müəlliflik hüququ",
  "Ticarət nişanları",
  "Distribusiya müqavilələri",
  "Vergiqoyma",
  "Beynəlxalq hüquqi tənzimləmə",
];

//
const MehkemeContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Əqli mülkiyyət</h3>
        <h5>
          Bizim intellektual mülkiyyət hüquqları sahəsində geniş təcrübəmiz
          intellektual mülkiyyət konsepsiyaları və anlayışlarının hərtərəfli
          təhlilinə və mənimsənilməsinə əsaslanır. Şirkətimiz əqli mülkiyyət
          məsələlərində elə yollar və vasitələrlə hüquqi yardım göstərir ki,
          müştərilərimiz onların qeyri-maddi əmlakının, həqiqətən də, maddi
          aktiv olduğunu hiss etsinlər. Bu sahədə səriştəmizə, həmçinin,
          intellektual mülkiyyətlə bağlı beynəlxalq hüquq normaları haqqında
          dərin bilgilərimiz də daxildir.
        </h5>

        {avatar && (
          <div className="avatarWra">
            <div className="row">
              <div className="col-md-4">
                <img src={avatarImg} alt="" />
              </div>
              <div className="col-md-8">
                <h4>
                  Aşağıdakı sahələrdə ekspert biliklər və müvafiq təcrübə
                  mövcuddur:
                </h4>
                <ul>
                  {listItem.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MehkemeContentArea;
