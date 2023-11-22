import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "İxtisar proseslərinin planlaşdırılması,sənədləşdirilməsi və həyata keçirilməsi",
  "Müddətli və müddətsiz  əmək müqavilələrinin bağlanması",
  "Əməkçi miqranlar və iş icazələri",
  "İşdən azad etmə",
  "Sosial paketlər",
  "İş yeri və  avadanlıqdan istifadə qaydaları",
  "Vkcansiyalar",
  "İş yerində bədbəxt hadisələr",
  "Sığorta",
  "Ezamiyyətlər və ezamiyyə haqları",
  "Mükafatlandırma",
  "Kollektiv mübahisələr də daxil olmaqla bütünnöv iddialar üzrəməhkəmə proseslərinn aparılması",
  "Məxfilik məsələləri və  şəxsi məlumatların qorunmasıı",
  "İnsan qaynaqları ilətəminat və işə təyinat",
  "Əmək münasibətlərinə xitam verilməsi",
  "Kollektiv müqavilələr",
];

const listItemParagraph = [
  "əmək qanunvericiliyinə tam uyğun əmək müqavilələrinin hazırlanması,",
  "Azərbaycan Respublikasının əmək qanunvericiliyinin bütün spektrini əhatə edən məsləhət və tövsiyələrin, o cümlədən, sosial müavinətlərin, əmək haqlarının, məzuniyyətlərin və xəstəlik kağızı əsasında ödəniləcək məbləğlərin hesablanması  və ödənilməsinə dair məsləhət və tövsiyələrin verilməsi,",
  "İşçilərin fərdi qaydada işdən azad edilməsi, işçilrin və iş yerlərinin ixtisarı  (yeddi təşkilatda, o cümlədən beş böyük neft şirkətində işcilərin ixtisarı və  bu məqsədlə onların qiymətləndirilməsi prosedurları hazırlanmış, prosedurların  həyata keçirilməsinin təşkili və ona nəzarət təmin edilmişdir), habelə işçilərin bir vəzifədən digərinə keçirilməsi və ya başqa funksiyaların həvalə edilməsi,",
  "Dövlət əmək müfəttişliyi ilə münasibətlərin qurulması, iş yerində bədbəxt  hadisələr, işçilərin və iş yerlərinin qiymətləndirilməsi üzrə məsləhətlərin  verilməsi,",
  "Sağlamlığın mühafizəsi, əmək təhlükəsizliyi və ətraf mühitin qorunmasına dair  qüvvədə olan standartlar və tələblər baxımından iki böyük neft şirkətinə  məsləhətlər verilməsi,",
  "Əmək mübahisələrinin məhkəməyə qədər həlli yönündə idarə edilməsi və eləcə də,  işçilər tərəfindən fərdi və kollektiv qaydada qaldırılmış əmək mübahisələrinə  dair iddiar üzrə məhkəmə proseslərində beynəlxalq şirkətlərin təmsil edilməsi,",
  "İş icazələrinin alınması və onların müddətinin uzadılması məsələlərindən  başlayaraq vizaların əldə edilməsi üçün lazım olan bütün prosedurların təminedilməsinədək əməkçi miqrantlarla bağlı bütün hüquqi rəsmilədirmələrin həyata  keçirilməsi,",
  "Böyük bir xarici neft şirkətinin törəmə müəssisəsi üçün İnsan Qaynaqlarına dair  sənədlərin və reqlamentin hazırlanması",
];
const EmekContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Əmək münasibətləri</h3>
        <h5>
          məşğulluq və əmək hüququna dair mürəkkəb məsələləri həll etmək
          səriştəsi vardır. Azərbaycanda fəaliyyət göstərən böyük beynəlxalq
          korporasiyalara işə qəbul strategiyası, daxili prosedurlar, iş
          icazələri və əməkci miqrantlar, əmək müqavilələri, konfidensiallıq və
          məxfi məlumatların qorunması məsələləri, rəqabəti istisna edən
          razılaşmalar, bağlı digər məsələlər, gizlilik və gizlilik
          rəqabətqabiliyyətli razılaşmalar, mükafatlandırma, social paketlər,
          işçilərin ixtisarı, işdən kənarlaşdırma və azad etmə prosedur və
          qaydaları barədə müfəssəl məsləhət və tövsiyələrin təqdim olunması.
          Təcrübəmizə əsaslanaraq aşağıdakı xidmətləri təklif edirik:
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
export default EmekContentArea;
