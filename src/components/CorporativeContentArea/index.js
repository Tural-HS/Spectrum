import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Bankların təsis edilməsi",
  "Bankların ləğv edilməsi",
  "Lisenziyalaşdırma və kapitala irəli sürülən tələblər",
  "Məxfilik məsələləri",
  "Çirkli pulların yuyulmasına qarşı qanunvericilik üzrə tələblər",
  "Layihələrin maliyyələşdirilməsinin sənədləşdirilməsi",
  "Zaminlik də daxil olmaqla, lakin bununla məhdudlaşmadan, əqdlərin təminatı",
  "Ticarətin maliyyələşdirilməsi (o cümlədən,akkreditiv və əlaqədar məsələlər daxil, lakin onlarla məhdudlaşmadan)",
  "Qiymətli kağızlar və saziş əsaslı digər maliyyə alətləri",
  "Girova tutmanın yönəldilməsi və həyata keçirilməsi",
  "Borcların restrukturizasiyasl",
  "Lizinq maliyyələşdirilməsi və təminat",
  "Tazminatlar",
  "Bank qarantiyaları",
  "Qiymətli kağızların tərtibatı və nöqsanların aradan qaldırılması",
];

const listItemParagraph = [
  "Gəmilərin və təyyarələrin alqı-satqı əməliyyatlarının maliyyələşdirilməsində kreditorlar və borcalanlara məsləhətlərin verilməsi;",
  "Neft yatağında hasilata başlanması üçün Londonda yerləşən borcalanın çoxmilyonlu təminatı olan kredit üzrə təmsil edilməsi;",
  "London əsaslı enerji şirkətinin çoxmilyonlu kreditin ayrılması ilə əlaqədar olaraq hüquqi tələblərə uyğunluğun təmin edilməsi və borc verənlərə hüquqi rəy verilməsi ilə bağlı təmsil edilməsi.",
  "Tikinti layihələrinə investisiya qoyuluşuna dair kredit təşkilatına məsləhətlərin verilməsi.",
  "Kreditləşdirmə əməliyyatları ilə əlaqədar beynəlxalq maliyyə qurumlarının sindikatına qiymətli kağızlara dair tövsiyələr vermək.",
  "Enerji hasilatı, korporativ, xarici valyuta əməliyyatları, özəlləşdirmə və investisiyalar ilə bağlı qanunvericilik də daxil olmaqla Azərbaycan kommersiya hüququnun bütün sahələri üzrə müxtəlif beynəlxalq şirkətlərə, o cümlədən, əsas neft və qaz şirkətləri və çoxmillətli maliyyə institutlarına hüquqi məsləhətlərin verilməsi;",
  "Mübadilə məsələləri və bank hesablarının hüquqi rejimi ilə bağlı tətbiq olunan hüquqi tələblərə uyğunluğun təmin edilməsi ilə əlaqədar böyük bir neft şirkətinə hüquqi yardım göstərilməsi.",
  "Qiymətli kağızların alınması və güzəşt edilməsi ilə əlaqədar xarici investisiya fonduna məsləhətlər verilməsi.",
  "İstehsal obyektlərinin tikintisinin maliyyələşdirilməsi ilə əlaqədar beynəlxalq maliyyə qurumuna məsləhətlər verilməsi.",
];
const CorporativeContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Lahiyələrin Maliyyələşdirilməsi və Bankçılıq</h3>
        <h5>
          - beynəlxalq maliyyə bazarlarında aparılan əməliyyatlarının əhatəli
          surətdə dərk edilməsi, bir çox sahələrdə geniş miqyaslı əməliyyatların
          aparılması üçün maliyyə qurumlarına məsləhətlətin verilməsi, maliyyə
          tənzimləməsi və bankların fəaliyyətinə tətbiq olunan hüquqi rejim
          barədə dərin bilgilər. Təcrübəmiz aşağıdakı sahələr əhatə edir:
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
export default CorporativeContentArea;
