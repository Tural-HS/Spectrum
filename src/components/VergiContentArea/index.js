import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Ödəniləcək vergilərin tərkib baxımından  müəyyənləşdirilməsi/dəq iqləşdirilməsi",
  "Hüquqi şəxslərin vergi mükəlləfiyyətləri",
  "Fiziki şəxslərin vergi mükəlləfiyyətləri",
  "Daşınmaz əmlakla əməliyyatlar üzrəbirbaşa və vasitəli vergilər",
  "Vasitəli vergitutma",
  "Şirkətlərin ayrılması, birləşməsi, çevrilməsi",
  "Vergi məsələləri üzrə  istintaq prosesinin aparılması",
];

const listItemParagraph = [
  "Vergilərin azaldılması məqsədi ilə investorlara investisiya yatırımlarının vergi bazası baxımından strukturlaşdırılması üzrə məsləhətlərin verilməsi",
  "Vergitutma ərazisi üzrə beynəlxalq şirkətə məsləhət verilməsi",
  "Bir sıra böyük neft şirkətlərinə öz vergi strategiyalarını qurmaqda hüquqi yardım göstərilməsi",
  "Aktivlərin köçürülməsinin nəticəsi olaraq ödənilməli vergilər barədə Hasilatın pay bölgüsü müqaviləsi üzrə podratçı tərəfə məsləhətlər verilməsi",
  "Vergilərin ödənilməsi/tutulması üzrə məhkəmə prosesində transmilli şirkətlərin təmsil olunması",
];
const VergiContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Vergilər</h3>
        <h5>
          korporativ və fərdi vergilər, eləcə də ƏDV və aksiz vergisi kimi digər
          birbaşa və vasitəli vergilər sahəsində əhəmiyyətli təcrübə
          qazanılmışdır. Bura aşağıdakılar daxildir:
        </h5>

        <p>
          {listItemParagraph.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </p>
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
export default VergiContentArea;
