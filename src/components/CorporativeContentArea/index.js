import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Şirkətlərin təsis edilməsi və satın alınması",
  "Birgə müəssisələr",
  "Ayrılma və ləğv etmə",
  "Təsis müqaviləsi və korporativ idarə etmə",
  "Qiymətli kağızlarla əməliyyatlar",
  "Şirkətlərin təşkilati strukturunun  dəyişdirilməsi, reinjiniring",
  "Ortaqlıq yaradılması və ləğvi ",
  "Ödəmə qabiliyyətinin itirilməsi",
  "Agentlik və distributorluq müqavilələri",
  "Opsionlarla əməliyyatlar",
  "İdarəetmə və rəhbərlik",
  "Daxili reqlament",
  "Qanunun tələblərinə uyğunluğun təmin edilməsi və qanunvericiliyin araşdırılması",
  "Standart müqavilə formaları",
  "Müflislik prosedurları",
  "Mübahisələrin məhkəməyə qədər həlli",
];

const listItemParagraph = [
  "Çoxlu sayda beynəlxalq şirkətlərə dövlət qeydiyyatının aparılması və onların korporativ strukturunun qurulması sahəsində məsləhətlər verilməsi",
  "Lift sənayesində böyük beynəlxalq şirkətə capital qoyuluşu və investisiya yatırımı üzrə məsləhətlərin verilməsi",
  "Beynəlxalq maliyyə institutu və çoxsaylı beynəlxalq şirkətlərə onların hüquqi tələblərə uyğunluğu baxımından araşdırmalar da daxil olmaqla daxili investisiya layihələrinin həyata keçirilməsi istiqamətində məsləhətlərin verilməsi",
  "Azərbaycanda fəaliyyət göstərən transmilli şirkətlərin bir neçə törəmə  müəssisələrinə birləşmə də daxil olmaqla onların yenidən təşkili və reinjinirinqi-daxili təşkilati strukturun yenilənməsi üzrə məsləhətlərin verilməsi",
  "Dünya Bankının `Biznesin həyata keçirilməsi` layihəsi ilə bağlı Azərbaycanda  şirkətlərin təsis edilməsi və qeydiyyatının hüquqi tənzimlənməsinin müxtəlif aspektləri Dünya Bankına məsləhətlər verilməsi",
  "Azərbaycanda fəaliyyət göstərən Hasilatın pay bölgüsü üzrə müqaviləni icra edən əməliyyat şirkətinin sub-podratçısına həmin əməliyyat şirkətinin digər subpodratçısının aktivlərinin alınmasına dair məsləhət verilməsi",
  "Azərbaycanda fəaliyyət göstərən Hasilatın pay bölgüsü üzrə müqavilə tərəfinə onun törəmə müəssisəsi ilə Azərbaycanda fəaliyyət göstərən Hasilatın pay bölgüsü üzrə digər müqavilə tərəfinin törəmə müəssisəsinin birləşməsi ilə   əlaqədar məsləhət verilməsi",
  "Hasilatın pay bölgüsü üzrə müqaviləni icra edən sub-podratçılar arasında torpaq, əmlak və aktivlərin köçürülməsi əməliyyatlarının planlaşdırılması və həyata keçirilməsi və bu cür əməliyyatların, lakin bunlarla məhdudlaşmadan, o cümlədən bunlara bəzər digər əməliyyatların yaratdığı vergi öhdəlikləri barədə   araşdırmaların aparılması və məsləhətlərin verilməsi.",
  "İki böyük neft şirkətinin birləşdirilməsindən sonra onların törəmə  müəssisələrinin təşkilati strukturunun yenidən qurulması üçün qanuni  məsələlərə nəzarət, proseslərin qanuna uyğunluğunun təmin edilməsi və bütün   lazımi hüquqi sənədlərin hazırlanması",
];
const CorporativeContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Korporativ hüquq</h3>
        <h5>
          bizim korporativ idarəetmə və kommersiya fəaliyyəti üzrə əldə
          etdiyimiz zəngin təcrübə müvafiq sahələrdə yerli və beynəlxalq
          biznesin geniş spektrini təmsil edən şirkətlər tərəfindən aparılan
          bütün növ transaksiyaları, o cümlədən neft və qaz, telekommunikasiya,
          maliyyə, sığora kimi fialıyyət sahələri, habelə kənd təsərrüfatı və
          onunla bağlı hazır məhsul dağıtımı, daşınmaz əmlakla əməliyyatlar,
          perakəndə ticarət kimi fəaliyyətləri, həmçinin, korporativ
          reinjiniring-təşkilati strukturun yenilənməsi və korporativ
          maliyyələşmə kimi biznes fəaliyyətlərini əhatə edir.
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
