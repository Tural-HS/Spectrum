import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const cetagoryMenu = [
  { name: "Təbii Ehtiyatlar / Neft və Qaz", route: "/practice-details" },
  {
    name: "Lahiyələrin Maliyyələşdirilməsi və Bankçılıq",
    route: "/practice-details/bank",
  },
  { name: "Tikinti və daşınmaz əmlak", route: "/practice-details/tikinti" },
  { name: "Korporativ hüquq", route: "/practice-details/law" },
  { name: "Vergilər", route: "/practice-details/vergi" },
  { name: "Əmək münasibətləri", route: "/practice-details/emek" },
  { name: "Sığorta", route: "/practice-details/sigorta" },
  { name: "Telekommunikasiya", route: "/practice-details/tele" },
  { name: "Ticarət və Nəqliyyat", route: "/practice-details/tvn" },
  {
    name: "Mübahisələrin məhkəməyəqədər həlli",
    route: "/practice-details/mmh",
  },
  { name: "Ətraaf mühitin qorunması", route: "/practice-details/emq" },
  { name: "Əqli mülkiyyət", route: "/practice-details/mulkiyyet" },
  { name: "Fərdi müştərilər", route: "/practice-details/ferdi" },
];

const CetagorySidebar = ({ className, title }) => {
  return (
    <div className={className}>
      <h3 className="sidebarTitle">{title}</h3>
      <ul>
        {cetagoryMenu.map((cetagory, i) => (
          <li key={i}>
            <Link to={cetagory.route}>{cetagory.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CetagorySidebar;
