import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/law.webp";
import breadcumb from "../../../images/breadcumb/1.jpeg";

import "./style.scss";

const aboutText = [
  {
    text: "Spektrumun fəaliyyət dairəsi Azərbaycan və beynəlxalq hüquqla bağlı hüquqi xidmətlərin bütün spektrini əhatə edir. Şirkətin təcrübəsi Azərbaycan qanunvericiliyinin bütün aspektlərini əhatə edir və şirkət xarici investorların Azərbaycandakı fəaliyyətinə hüquqi yardım göstərilməsi üzrə zamanın sınağından keçmiş təcrübəyə malikdir. Şirkətin səriştəsi Azərbaycanın hüquq sisteminin, yerli biznes mühitinin, korporativ hüquq,kommersiya hüququ, müqavilələr hüququ, qanunların toqquşması (beynəlxalq xüsusi hüquq) və beynəlxalq ictimai hüquq, inzibati hüquq, əmək hüququ, cinayət qanunu, inzibati və prosessual qanunvericiliyin dərindən dərk edilməsinə əsaslanır.",
  },
  {
    text: "Firmanın güclü tərəfləri sırasına xarici investisiyalar, təbii ehtiyatlar, tikinti, məşğulluq, ticarət qaydaları, vergitutma və maliyyə sahələrini ehtiva edən dərin ekspert biliklər daxildir. Şirkət bankçılıq, valyuta tənzimləməsi, qiymətli kağızlar,telekommunikasiya, özəlləşdirmə, rəqabət, nəqliyyat (yol, dəmir yolu, dəniz və aviasiya), sığorta, əqli mülkiyyət, daşınmaz əmlak və xüsusi hüquq sahələrində əhəmiyyətli təcrübəyə malikdir. Azərbaycanda belə bir incə sahədə-dövlət orqanları ilə danışıqlar aparmaq və razılığa gəlmək kimi incə bir sahədə böyük təcrübə sahəsində əldə olunmuşdur.",
  },
  {
    text: "Ümumi xarakter daşıyan hüquqi məsləhətlərlə yanaşı Spectrum öz müştərilərinə Azərbaycan Respublikasının məhkəmələri və dövlət icra hakimiyyəti orqanlarının, eləcə də xarici arbitraj institutları qarşısında mübahisələrin effektli həlli və məhkəmə araşdırmaları sahəsində böyük təcrübəyə əsaslanan xidmətlər təklif edir.",
  },
  {
    text: "Spectrumun işçi dilləri - İngilis, Türk, Rus, Ərəb və Azərbaycan dilləridir.",
  },
];

const services = [
  {
    icon: "flaticon-parents",
    title: "Family Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-wounded",
    title: "Personal Injury",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-employee",
    title: "Business Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-thief",
    title: "Criminal Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Education Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-house",
    title: "Real Estate Law",
    content: "There are many variations of passages of Lorem ",
  },
];

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="About Us"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      <Service className="serviceArea mt-0" />
      <About
        className="aboutArea aboutAreaStyleTwo"
        title="Niyə biz"
        subTitle="Hakkımızda"
        images={about}
        orderLast="order-last"
        videoId="XxVg_s8xAms"
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleTwo"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={services}
      />
      <Testmonial className="testmonialArea pt100" />
      <CounterArea
        fullWidth={true}
        className="counterArea counterAreaStyleTwo"
      />
      <TeamMember
        title="Qualified Attorneys "
        subTitle="Meet Our Experts"
        className="teamArea"
        slider={true}
      />
      <BlogArea
        className="blogArea"
        title="Latest News"
        subTitle="From Our Blog
                "
      />
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
