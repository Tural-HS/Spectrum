import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "İradə ifadəsinin icraya yönəldilməsi",
  "Nikah müqavilələri",
  "Cinayət işləri",
  "Boşanma",
  "Alimety tələbləri",
  "Həbsə alma",
  "İnzabati hüquqpozmalara dair işlər",
  "Övladığa götürmə",
  "Valideyn hüquqları",
  "Boşanma məsələlərinin hüquqi nizamlanması",
];

const FerdiContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Fərdi müştərilər</h3>
        <h5>
          Fiziki şəxslərə xidmətlər sahəsində əldə etdiyimiz təcrübə cinayət
          hüququ, inzibati xətalar, vərəsəlik hüququ, iradə ifadəsi, boşanma,
          birgə mülkiyyət və övladlığa götürmə məsələlərinin həlli ilə əlaqədar
          olmuşdur.
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
export default FerdiContentArea;
