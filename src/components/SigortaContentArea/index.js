import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Şığorta şəhadətnaməsi və sığoartamüqaviləsinin hüquqi ekspertizası",
  "Sığoarta şərtlərinin mövcud qanunvericiliyin tələblərinə uyğunluğu",
  "Mübahisələrin məhkəməyə qədər həlliistiqqmətində danışıqların aparılması",
  "Məhkəmə proseslərinin aparılması",
];

const SigortaContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Sığorta</h3>
        <h5>
          sığorta qanunvericiliyi və vurulmuş ziyana görə məsuliyyət məsələləri
          sahəsində dərin biliklərə malikik. sığorta ilə bağlı xidmətlər fərdi
          tibbi və işəgötürən məsuliyyət sığortasından başlayaraq enerji
          hasilati və ekologiyanın qorunması ilə əlaqədar fəaliyyətlərə dair
          tələb olunan sığorta növlərinin bütün spektrini, o cümlədən, icbari
          sığortanın bütün növlərini əhatə edir. Şirkət mübahisələrin həlli,
          mövcud vəziyyətin hüquqi qiymətləndiriməsi, hadisə yeri və vurulmuş
          ziyanın müəyyənləşdirilməsi sahəsində çox böyük əməli təcrübəyə
          malikdir.
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
export default SigortaContentArea;
