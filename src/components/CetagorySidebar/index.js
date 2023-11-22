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
  { name: "Vergilər", route: "vergiler" },
  { name: "Əmək münasibətləri", route: "emek" },
  { name: "Sığorta", route: "sıgorta" },
  { name: "Telekommunikasiya", route: "telekomunikasiya" },
  { name: "Mübahisələrin məhkəməyəqədər həlli", route: "mmh" },
  { name: "Ətraaf mühitin qorunması", route: "emq" },
  { name: "Fərdi müştərilər", route: "ferdi" },
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
