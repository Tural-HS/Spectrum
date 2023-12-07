import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import Service from "../../../components/Service";
import About from "../../../components/About";
import About_2 from "../../../components/About_2";
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
import Testmonial from "../../../components/Testmonial";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpeg";
import about_2 from "../../../images/about/law3.jpeg";
import signature from "../../../images/about/1.png";

// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";

const aboutText = [
  {
    text: "Spektrum, təsis edildiyi ilk gündən etibarən öz müştərilərinə mümkün olan ən yaxşı hüquqi məsləhət və xidmətləri təqdim etməyə hədəflənmişdir. Şirkət qabaqcıl milli hüquq şirkətləri arasında gücıü mövqelərə malikdir, bütün səylərini müştərilərin gözləntilərinə cavab vermək və keyfiyyətli xidmət göstərməkdə effektiv və səmərəli olmağa sərf etmiş və bu sahədə fərqlənmişdir.",
  },
  {
    text: "Şirkət fərdlərdən başlamış beynəlxalq qurumlaradək və yerli şirkətlərdən başlayaraq, Azərbaycanda fəaliyyət göstərən böyük çoxmillətli təsisatlara və dövlət qurumlarına qədər geniş bir miqyasda fəaliyyət göstərən müştərilərini təmsil edərək, onlara hüququn müxtəlif sahələrində qazanmış olduğu dərin təcrübə, bilik və bacarıqlarını təklif edir.",
  },
];
const aboutText2 = [
  {
    text: "Spektrum Azərbaycan öz müstəqilliyini əldə etdikdən sonra ölkənin hüquqi xidmətlər bazarında aktiv fəaliyyət göstərən direktoru Kanan Səfərli tərəfindən idarə olunur. O, ilk olaraq, bir çox beynəlxalq biznes layihələrində fərdi qaydada yüksək keyfiyyətli peşəkar xidmətlər göstərmiş, daha sonra Almaniyanın “Schultze Hüquq Bürosu” (1995-1997) və Şotlandiyanın “Ledinqham Çalmers” hüquq şirkətində (1997-2004) çalışmış,bundan sonra qurudakı neft yataqlarının idarə edilməsi üzrə fəaliyyət göstərən İngilis-Azərbaycan birgə müəssisəsində hüquq məsləhətçisi işləmiş və sonar da sement zavodunun tikitisi layihəsini həyata keçirən şirkətdə beynəlxalq komandanın üzvü olmuşdur. 2003-cü ildən etibarən o, “Spectrum” hüquq şirkətini təsis edərək özəl hüquqi praktika ilə məşğul olmaqdadır.",
  },
  {
    text: "Kənan Səfərli Azərbaycan Respublikası Vəkillər Kollegiyasının üzvüdür. O, Kiyev Dövlət Universitetini bitirmişdir və ali hüquqi təhsil üzrə Universitet diplomu almışdır. O, həmçinin, Beynəlxal Ticarət Təşkilatı (WTO) tərəfindən verilmiş “GATT/WTO law” (Tariflər və TicarT üzrə Baş Saziş/Beynəlxal Ticarət Təşkilatı hüququ) üzrə diploma malikdir. O, Azərbaycan və Beynəlxalq hüququn müxtəlif aspektlərinə həsr olunmuş Azərbaycan, ingilis və rus dillərində çap olunmuş on doqquz nəşrin müəllifidir.",
  },
];

const heroSliders = [
  {
    images: "slideWrapperOne",
    // title: "",
    subTitle: "HÜQUQİ XİDMƏTLƏRİN TAM SPEKTRİ",

    text: " SPEKTRUM QSC",
    button: "Contact us now",
  },
  {
    images: "slideWrapperTwo",
    // title: "",
    subTitle: "MÜŞKÜL PROBLEMLƏRİN EFFEKTIV HƏLLİ",
    text: " SPEKTRUM QSC",
    button: "Contact us now",
  },
];

const services = [
  {
    icon: "flaticon-parents",
    title: "Family Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-wounded",
    title: "Personal Injury",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-employee",
    title: "Business Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-thief",
    title: "Criminal Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Education Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-house",
    title: "Real Estate Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
  },
];

const portfolioItem = [
  { images: portfolio1, title: "General Service", subtitle: "Corporate" },
  { images: portfolio2, title: "Personal Issue", subtitle: "General" },
  { images: portfolio3, title: "Business Accounting", subtitle: "Business" },
  { images: portfolio4, title: "Accounting issue", subtitle: "Criminal" },
  {
    images: portfolio5,
    title: "Business Accounting",
    subtitle: "Family Issue",
  },
];

const HomePageOne = () => {
  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />
      <Service className="serviceArea" />
      <About
        className="aboutArea"
        title="Haqqımızda"
        images={about}
        signature={signature}
        pragraphs={aboutText}
      />
      <About_2
        className="aboutArea"
        title="Haqqımızda"
        images={about_2}
        signature={signature}
        pragraphs={aboutText2}
      />
      <ServiceArea
        className="ourServiceArea"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={services}
      />
      {/* <Portfolio
        className="portfolioArea"
        title="Our Resent Case Studies"
        subTitle="Here Our Best Work"
        portfolioItem={portfolioItem}
      /> */}
      {/* <Testmonial className="testmonialArea" /> */}
      {/* <ContactArea className="contactArea" /> */}
      {/* <TeamMember
        title="Qualified Attorneys "
        subTitle="Meet Our Experts"
        className="teamArea"
        slider={true}
      /> */}
      {/* <CounterArea className="counterArea" /> */}
      {/* <BlogArea
        className="blogArea"
        title="Latest News"
        subTitle="From Our Blog
                "
      /> */}
      {/* <NewsLetter className="newsLetterArea" /> */}
      <FooterArea />
    </Fragment>
  );
};
export default HomePageOne;
