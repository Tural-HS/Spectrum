import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Lisenziyalaşdırma və tikinti üçün icazələrin alınması",
  "İnzibati və tənzimləyici orqanlardan təsdiqlərin alınması",
  "Dövlət Qeydiyyatı",
  "Maliyyələşdirmə",
  "Tenderlərin hazırlanması, təşkil edilməsi və həata keçirilməsi",
  "Tender sənədlərinin hazırlanması",
  "Qiymətli kağızların tərtib edilməsi və hüquqi qüvvəyə mindirilməsi",
  "Daşınmaz əmlaka dair alğı-satqı və icarə də daxi olmaqla bütün növ əməliyyatlar üzrə əqdlərin bağlanması və həyata keçirioməsi",
  "Mübahisələrin məhkəməyəqədər həlli",
  "Layihələrin idarə edilməsi",
  "Vergiqoyma məsələləri",
];

const listItemParagraph = [
  "Sement zavodunun tikintisi layihəsinin bütün aspektləri üzrə layihə rəhbərinə texniki məsləhətçinin seçilməsindən başlayaraq müqavilələrin (EPC (LST-layihələndirmə, satınalma, tikinti) müqaviləsi, geoloji kəşfiyyat işləri, avtomobil yolunun tikintisi, elektrik xəttinin çəkilməsi, layihənin ekoloji qiymətləndirməsinin aparılmasına dair müqavilələr) tərtibatı, müzakirəsi, dəyişikliklərin edilməsi, tender sənədlərinin (yuxarıda göstərilən bütün müqavilələrin bağlanması məqsədilə), məsələn, əsas tender şərtləri toplusu kimi sənədlərin hazırlanması, müqavilə şərtləri üzrə podratçılarla danışıqların aparılması, niyyət protokollarının tərtib edilməsi, maliyyələşdirmə şərtləri və sənədlərinin hüquqi tələblərə uyğunlaşdırılması.Xidmətlər işçilərlə bağlı sənədlərin hüquqi ekspertizasını, sənədlərin tərtibatında yardım göstərilməsini və məşğulluq məsələləri ilə bağlı məsləhətləşmələrin aparılmasını ehtiva etmişdir;",
  "Azərbaycan Respublikasının hökumət qurumuna çoxmərtəbəli göydələn binanın (Qafqazda ən yüksək) tikintisi ilə əlaqədar ortaya çıxan bütün məsələlər və suallar: texniki məsləhətçinin seçilməsi və onunla müqavilə bağlanması mərhələsindən başlayaraq binanın layihələndirilməsi və tikintisinədək olan bütün proseslər üzrə hüquqi dəstək və məsləhət verilməsi. Xidmətlər podratçılarla gündəlik münasibətlərdə meydana çıxan məsələlərin çözülməsində, onlar tərəfindən təqdim olunan hesabatların nəzərdən keçirilməsində, layihənin icra edilməsinə dair müxtəlif sənədlərin, satınalmalar üzrə sənəd prosedurların qanunvericiliyin tələblərinə uyğunlaşdırılmasında, tenderlərin təşkili və aparılmasında, müvafiq sənədlərin hazırlanması, nəzərdən keçirilməsi və nöqsan və çatışmazlıqların aradan qaldırılmasında hüquqi yardım göstərilməsini əhatə etmişdir;",
  "Çox sayda böyük şirkətlərə ofis binaları, yaşayış yerləri, anbar və s.kimi istifadə edilməsi üçün nəzərədə tutulmuş daşınmaz əmlakla bağlı hüquqlar, o cümlədən, mülkiyyət, sahiblik, istifadə, icarə hüquqları, mülkiyyətin yüklü edilməsi, o cümlədən servitutlar və uzufruktlar, hüquqların məhdudlaşdırılması və sair bu kimi məsələlər üzrə məsləhətlərin verilməsi. Bu cür layihələr tam və ya qismən alqı-satqı müqavilələri, girov müqavilələrinin tərtib edilməsi, əmlak və əmlak hüquqlarının qeydiyyatı, qiymətli kağızların rəsmiləşdirilməsi istiqamətində bütün hüquqi tələblərin yerinə yetirilməsi, korporativ, əmlak və torpaq hüquqları üzrə qanunvericiliyin bütün tələbləri nəzərə alınmaqla lazımi hesabatların hazırlanması işlərini əhatə etmişdir.",
  "Xeyriyyə fonduna ofis məqsədləri üçün binanın satın alınması üçün yardım edilməsi və məsləhət verilməsi (müqavilə tərtib edilməsi, qeydiyyat aparılması, əmlak və torpaq hüquqları üzrə qanunvericiliyin bütün tələbləri nəzərə alınmaqla lazımi hesabatların hazırlanması).",
  "Daşınmaz əmlakın müxtəlif məqsədlər üçün alınması ilə əlaqədar fiziki şəxslərə hüquqi məsləhətlərin, o cümlədən hüquqmüəyyənləşdirici sənədlərin hüquqi ekspertizası, əqdlərin qanunvericiliyin tələblərinə uyğunluq baxımından yoxlanması, müqavilə layihələrinin tərtib edilməsi, qeydiyyat prosedurlarının aparılması və onların qanunvericiliyin tələblərinə uyğunluğunun təmin edilməsi.",
  "Dünya Bankının `Biznesin həyata keçirilməsi` layihəsinin Azərbaycanda tikinti sektorunun vəziyyəti ilə bağlı hissəsinin tərtib edilməsind yaxından iştirak.",
  "Hasilatın pay bölgüsü müqaviləsi çərçivəsində fəaliyyət göstərən bir sıra iri şirkətlərə daşınmaz əmlakın (ofis, anbar və ya rəsmi yaşayış yeri kimi) alınması və ya icarəsi üzrə məsləhətlər verilməsi və müvafiq sənədləşmənin hazırlanması.",
  "Xarici korporativ və fərdi müştərilər üçün bir sıra böyük əmlakların alınması.",
];
const SingleContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Tikinti və daşınmaz əmlak</h3>
        <h5>
          Bu sahədə xidmətlər daşınmaz əmlakla əlaqəli məsələlər və
          əməliyyatların tam siyahısını ehtiva edir. Təcrübəmizə aşağıdakı
          sahələrdə fəaliyyət daxildir:
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
