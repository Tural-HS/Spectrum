import React from "react";
import avatarImg from "../../images/practice/4.jpg";

import "./style.scss";

const listItem = [
  "Lisenziyalaşdırma vəsahəvi tənzimləmə məsələləri ",
  "İctimai infrastruktur  obyektlərindən istifadə  imkanları",
  "Mobil telekommunikasiyaxidmətləri üzrə hər növ  müqavilələr",
  "Agentlik münasibətləri",
  "Distribusiya üzrə müqavilələr",
];

const TeleContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>Telekommunikasiya</h3>
        <h5>
          Bu sahədə şirkətin malik olduğu zəngin təcrübə layihələrin
          maliyyələşdirilməsi, şirkətlərin təsis edilməsi, alınması, eləcə də
          abunə müqavilələri kimi agentlik və xidmət müqavilələri və s. ehtiva
          edir. Müştərilərə telekommunikasiya ilə bağlı hüquqi tənzimləmə
          vasitələri və investisiya məsələləri barədə məsləhətlərin verilməsində
          hərtərəfli səriştəmiz vardır.
        </h5>

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
export default TeleContentArea;
