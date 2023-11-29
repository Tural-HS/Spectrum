import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Logistika müqvilələri",
  "Yüklərin sığortalanması",
  "Gömrük təmizlənməsi vərüsumları",
  "Hüquqi tənzimləmə üzrə məsləhətlər",
  "Vasitəçilik,  danışıqların aparılması və arbitraj",
  "Təyyarələrin alqı-satqısı/maliyyələşdirilm əsi və lizinqi",
  "Təyyarələrin qeydiyyatının aparılması",
  "Gəmilərin alqı-satqısı/maliyyələşdirilməsi və lizinqi",
  "Əmək münasibətləri",
  "Təhlükəsizliyin təmin edilməsi, o cümlədən, aviasiya və gəmiçilikdə",
  "Yüklərin çatdırılması ilə əlaqədar iddiaların  qaldırılması",
  "Gəmilərin qeydiyyatı",
];

const listItemParagraph = [
  "Hasilatın pay bölgüsü müqaviləsinin tərəfi olan şirkət tərəfindən həminmüqavilə çərçivəsində idxal olunmuş neft avadanlığının ixracının hər hansı vergilər və ya gömrük rüsumları tutulmadan (adi qaydada avadanlığa sərəncam verilməsindən sonra ödənilməli olan) həyata keçirilməsi",
  "Hasilatın pay bölgüsü müqavilələrinin tərəfləri olan şirkətlər və onların podratçıları üçün alqı-satqı, satın alma və xidmət müqavilələrinin, həçinin, satınalma sifarişlərinin hazırlanması",
];
const TicaretContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Ticarət və Nəqliyyat</h3>
        <h5>
          Şirkətin təcrübəsi inzibati hüquq münasibətləri, müflisləşmə, məhkəmə
          prosesləri, ətraf mühitin qorunması, əmək və korporativ hüquq
          sahələrini əhatə edir, o cümlədən:
        </h5>

        <p>
          {listItemParagraph.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </p>
        {avatar && (
          <div className="avatarWra">
            <div className="row">
              {/* <div className="col-md-4">
                <img src={avatarImg} alt="" />
              </div> */}
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
export default TicaretContentArea;
