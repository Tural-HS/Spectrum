import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Neft hasilatı meydançasının tikintisi",
  "Neft nəqli üçün boru kəmərlərinin tikintisi",
  "Sement zavodunun tikintisi",
  "Sənaye və mülki tikinti",
  "Ətraf mühitə industrial təsirlərin məsələlərinin hüquqi tənzimlənməsi",
  "Ekologiya ilə bağlı icazələrin alınması",

  "Ətraf mühitə tullantılar üzrə icazə verilən hədlər və qüvvədə olan məhdudiyyətlər",
  "Torpaqların çirklənməsi və rekreasiyası",
  "Ekoloji qiymətləndirmə və onun sənədləşdirilməsi",
  "Nəqliyyat",
  "Sığorta",
  "Məhkəmə işləri",
  "Çirkab suları",
  "Təhlükəli tullantılar",
  "Torpaq altı əməliyyatlar",
  "Qorunan ərazilər",
  "Tullantıların məhv edilməsi və prosesin idarə olunması",
];

const listItemParagraph = [
  "Hasilatın pay bölgüsü müqaviləsi üzrə xarici subpodratçını Ekologiya və Təbii Sərvətlər Nazirliyi ilə tullantıların məhv edilməsi və emal məsələləri, eləcə də digər məsələlər üzrə mübahisədə müvəffəqiyyətlə təmsil etmişik",
  "Layihə öncəki mərhələdə ətraf mühitin çirklənməsi ilə bağlı problemləri həll etmək üçün quruda fəaliyyət göstərən neft əməliyyat şirkətinə uğurla  nəticəlnmiş hüquqi yardım göstərilməsi",
  "Quruda fəaliyyət göstərən neft əməliyyat şirkətinə Ətraf Mühitə Təsirin  Qiymətləndirilməsi üzrə İlkin Hesabatın hazırlanmasında hüquqi yardım göstərilməsi",
];
const EtrafContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Ətraaf mühitin qorunması</h3>
        <h5>
          Ətraf mühitlə bağlı məsələlərin geniş spektri üzrə hüquqi yardım
          göstərilməsi sahəsində, o cümlədən, ətraf mühitin çirkləndirilməsi
          üzrə iddialara qarşı müdafiə, icazə və lisenziyaların əldə edilməsi,
          Ətraf Mühitə Təsirin Qiymətləndirilməsi üzrə İlkin Hesabatın
          hazırlanması, təhlükəli maddələrin daşınması və saxlanması,
          tullantıların məhv edilməsi və bu prosesin idarə olunması, torpaqların
          çirklənməsi, bu və ya digər layihənn başlanmasınadək olan mərhələdə
          ətraf mühitin çirklənməsi sahəsində yaranan problemlər kimi
          məsələlərin və ətraf mühitin mühafizəsi ilə bağlı digər problemlərin
          həlli sahəsində böyük səriştəmiz və təcrübəmiz vardır. Təcrübəmiz
          aşağıda göstərilən məsələləri əhatə edir:
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
export default EtrafContentArea;
