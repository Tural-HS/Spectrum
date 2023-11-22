import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Iddia qaldırmış işçilərlə mübahisənin bir sıra həlli yollarının müzakirəedilməsisi, onlardan dördü həmin zaman məhkəmə prosesində idi",
  "Dövlət Gömrük Komitəsinin idxal rüsumlarının ödənilməsinə dair iddialarına quruda fəaliyyət göstərən neft əməliyyat şirkəttinə göstərdiyimiz hüquqi yardım uğurla nəticələnmişdir",
  "Lisenziyalaşdırma və  dövlət qeydiyyatı",
  "Vergilər",
  "Nəqliyyat",
  "İşlə qəbul və əmək  münasibətləri",
  "Sığorta",
  "Müqavilələrin icra edilməsi",
  "Daşınmaz əmlak",
  "Maliyyələşdirmə",
  "Lizinq",
  "Ətraf mühitin qorunması",
  "Alqı-satqı",
  "Qiymətli kağızlar",
  "Təminatlı transakiyalar",
  "Hasilatın pay bölgüsü müqavilələri üzrə qanunvericilik",
  "Gömrük qaydaları",
];

//
const MulkiyyetContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Mübahisələrin məhkəməyəqədər həlli</h3>
        <h5>
          Azərbaycanda məhkəmə proseslərinin çətin, uzun vaxt aparan, çox xərc
          tələb edən və yetkin hüquq sistemləri ilə müqayisədə daha az etibarlı
          və nəticənin əvvəlcədən proqnozlaşdırılması imkanlarının məhdud olması
          nəzərə alınaraq, ilk seçim olaraq, bütün səylər mübahisənin danışıqlar
          yolu ilə həllinə nail olunmasına yönəldilir və məhkəmələrə yalnız
          digər vasitələrdən istifadənin uğursuz olduğu təqdirdə son olaraq
          müraciət edilir. Mübahisələrin həlli sahəsində geniş təcrübə, müxtəlif
          həll metodlarından istifadə etmək bacarığı və yerli məhkəmə sisteminin
          xüsusiyyətləri üzrə dərin biliklər şirkətin ən qiymətli
          aktivlərindəndir və müştərilərimiz üçün məhkəmə təhlükəsi yarandıqda
          müvafiq olaraq onlarla öz müştəriləri və/və ya işgüzar tərəfdaşları
          arasında əmələ gəlmiş ziddiyyətləri həll etmək üçün uğurlu ola biləcək
          ən yaxşı seçimdir. Məhkəmə prosesləri üzrə təcrübəmizə əsaslanaraq,
          yerli xüsusiyyətlər və mümkün nəticələrin müxtəlifliyi nəzərə
          alınmaqla müştərilərimizə onlaın ehtiyaclarına cavab verə biləcək
          mümkün olan ən yaxşı seçim variantları təklif edilir. Mümkün
          variantlardan hər biri və onların ehtimal olunan nəticəsi müştəri ilə
          müzakirə edilir və razılaşdırılır. Daha sonar, müəyyənləşdirilmiş
          məqsədlərə nail olunması üçün razılaşdırılmış tədbirlər planına dəqiq
          şəkildə həyata keçirilir.
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
export default MulkiyyetContentArea;
