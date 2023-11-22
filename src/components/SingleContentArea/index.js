import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Yerin təkindən istifadəyə dair qanunvericilik",
  "Lisenziyalaşdırma və xüsusi icazələr",
  "Məcburi öhdəliklər",
  "Torpaq hüquqları",
  "Hasilatın pay bölgüsü sazişləri",
  "Layihələndirmə,Satınalma və Tikinti üzrə Podrat müqavilələri",
  "Qazma müqavilələri",
  "Boru kəməri nəqliyyatı müqavilələri",
  "Neft alğı-satqı müqavilələri və digər sahəvi səciyyət daşıyan podrat müqavilələri",
  "Ətraf mühtin qorunması məsələləri",
  "Gömrük məsələləri də daxil olmaqla İdxal və İxrac əməliyyatları",
  "Vergitutma",
  "Mübahisələrin həlli",
  "Neft və qaz əməliyyatları ilə bağlı əmlakı və şirkətlərin alqı-satqısı və birləşməsi",
];

const listItemParagraph = [
  "Bakı-Tiflis-Ceyhan boru kəmərinin tikintisinin maliyyələşdirilməsi ilə bağlı beynəlxalq maliyyə qurumlarının birliyinə hüquqi tövsiyələrin verilməsi;",
  "Azəri/Çıraq/Günəşli İlkin Neft Layihəsi ilə bağlı enerji sahəsində fəaliyyət, korporativ hüquq, özəlləşdirmə və investisiyalar ilə əlaqədar qanunvericilik, qiymətli kağızlara dair müxtəlif müqavilələrin etibarlılığı və s. də daxil olmaqla beynəlxalq maliyyə institutlarının sindikatına tətbiq edilməli mövcud qanunvericiliyə dair məsləhətlərin verilməsi;",
  "Qurudakı neft-qaz fəaliyyəti ilə əlaqədar olaraq əməliyyat şirkəti üçün Birgə Əməliyyat müqaviləsi layihəsinin tərtib edilməsi;",
  "Hasilatın pay bölgüsü sazişləri, eləcə də, neft və qaz sahəsində qanunvericiliklə əlaqədar əsas neft və qaz korporasiyaları və çoxmillətli maliyyə təşkilatlarına məsləhətlər verilməsi;",
  "Hasilatın pay bölgüsü sazişləri əsasında tətbiq edilən qanunlar ilə ümumi əsaslarla tətbiq olunan Azərbaycan qanunvericiliyinin (məsələn, Azərbaycan Əmək Məcəlləsi, SƏTƏM standartları, lisenziyalaşdırma, torpaq alqı-satqısı, fəaliyyət hüquqları və s.) tətbiqi zamanı qarşılıqlı tənzimlənmə üzrə böyük neft və qaz şirkətlərinə məsləhətlərin verilməsi.",
];
const SingleContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Təbii Ehtiyatlar / Neft və Qaz</h3>
        <h5>
          – Böyük neft, dağ-mədən və müxtəlif xidmətlər təklif edən şirkətlərə,
          eləcə də maliyyə institutlarına Azərbaycanda təbii sərvətlərlə
          əlaqədar fəaliyyət və enerji layihələrinin həyata keçirilməsi ilə
          bağlı fəaliyyətin bütün aspektləri, xüsusən tələb olunan hüquqi
          prosedurlar, lisenziyalaşdırma, mərhələləndirmə və müqavilələrin
          bağlanması üzrə məsləhətlərin verilməsidnə geniş təcrübə. Bu təcrübə
          aşağıdakıları əhatə edir:
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
export default SingleContentArea;
