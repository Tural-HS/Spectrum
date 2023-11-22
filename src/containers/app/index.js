import React, { Fragment, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import HomePageTwo from "../Pages/HomePageTwo";
import HomePageThree from "../Pages/HomePageThree";
import AboutPage from "../Pages/AboutPage";
import PracticePage from "../Pages/PracticePage";
import PracticeSinglePage from "../Pages/PracticeSinglePage";
import PracticeBank from "../Pages/PracticeBank";
import PortfolioPage from "../Pages/PortfolioPage";
import SinglePortfolioPage from "../Pages/SinglePortfolioPage";
import TeamPage from "../Pages/TeamPage";
import SingleTeamPage from "../Pages/SingleTeamPage";
import ContactPage from "../Pages/ContactPage";
import BlogLeftPage from "../Pages/BlogLeftPage";
import BlogRightPage from "../Pages/BlogRightPage";
import BlogFullWidth from "../Pages/BlogFullWidth";
import "./App.css";
import PracticeTikinti from "../Pages/PracticeTikinti";
import PracticeLaw from "../Pages/PracticeLaw";
import PracticeVergi from "../Pages/PracticeVergi";
import PracticeEmek from "../Pages/PracticeEmek";
import PracticeSigorta from "../Pages/PracticeSigorta";
import PracticeTele from "../Pages/PracticeTele";
import PracticeMehkeme from "../Pages/PracticeMehkeme";
import PracticeTicaret from "../Pages/PracticeTIcaret";
import PracticeEtraf from "../Pages/PracticeEtraf";
import PracticeMulkiyyet from "../Pages/PracticeMulkiyyet";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Routes>
            <Route exact path="/" element={<HomePageOne />} />
            <Route exact path="home-two" element={<HomePageTwo />} />
            <Route exact path="home-three" element={<HomePageThree />} />
            <Route exact path="about" element={<AboutPage />} />
            <Route exact path="practice" element={<PracticePage />} />
            <Route
              exact
              path="practice-details"
              element={<PracticeSinglePage />}
            />
            <Route exact path="case-stadies" element={<PortfolioPage />} />
            <Route
              exact
              path="case-stadies-details"
              element={<SinglePortfolioPage />}
            />
            <Route
              exact
              path="practice-details/bank"
              element={<PracticeBank />}
            />
            <Route
              exact
              path="practice-details/tikinti"
              element={<PracticeTikinti />}
            />
            <Route
              exact
              path="practice-details/law"
              element={<PracticeLaw />}
            />
            <Route
              exact
              path="practice-details/vergi"
              element={<PracticeVergi />}
            />
            <Route
              exact
              path="practice-details/emek"
              element={<PracticeEmek />}
            />
            <Route
              exact
              path="practice-details/sigorta"
              element={<PracticeSigorta />}
            />
            <Route
              exact
              path="practice-details/tele"
              element={<PracticeTele />}
            />
            <Route
              exact
              path="practice-details/mmh"
              element={<PracticeMehkeme />}
            />
            <Route
              exact
              path="practice-details/tvn"
              element={<PracticeTicaret />}
            />
            <Route
              exact
              path="practice-details/emq"
              element={<PracticeEtraf />}
            />
            <Route
              exact
              path="practice-details/mulkiyyet"
              element={<PracticeMulkiyyet />}
            />

            <Route exact path="attorneys" element={<TeamPage />} />
            <Route exact path="attorneys-single" element={<SingleTeamPage />} />
            <Route exact path="contact" element={<ContactPage />} />
            <Route exact path="blog-left" element={<BlogLeftPage />} />
            <Route exact path="blog-right" element={<BlogRightPage />} />
            <Route exact path="blog-fullwidth" element={<BlogFullWidth />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
