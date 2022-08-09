import { React, useContext, useState } from "react";
import { ThemeContext } from "./contexts/theme";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// import useToken from "./useToken";

import { Copyright, Navbar } from "./components";
import {
  AboutPage,
  HomePage,
  WatershedReportsPage,
  SlackCallsPage,
  QuoraNotificationsPage,
  VenuenextCanopyPage,
  DisneyLauncherPage,
  ErrorPage,
  ServicesPage,
} from "./pages";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  // const { token, setToken } = useToken();

  return (
    <div>
      {/* {token ? <Navbar token={token} /> : <Navbar />} */}
      <Navbar />
      <div className="App">
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/carbon-reporting"
              exact
              element={<WatershedReportsPage />}
            />
            <Route path="/slack-calls" exact element={<SlackCallsPage />} />
            <Route
              path="/quora-notifications"
              exact
              element={<QuoraNotificationsPage />}
            />
            <Route
              path="/canopy-design-system"
              exact
              element={<VenuenextCanopyPage />}
            />
            <Route
              path="/disney-home-launcher"
              exact
              element={<DisneyLauncherPage />}
            />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/services" exact element={<ServicesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* {token ? (
            <Routes>
              <Route path="/" element={<HomePage token={token} />} />
              <Route path="/about" exact element={<AboutPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route
                path="/"
                exact
                element={<HomePage setToken={setToken} />}
              />
              <Route
                path="/carbon-reporting"
                exact
                element={<WatershedReportsPage />}
              />
              <Route path="/slack-calls" exact element={<SlackCallsPage />} />
              <Route
                path="/quora-notifications"
                exact
                element={<QuoraNotificationsPage />}
              />
              <Route
                path="/canopy-design-system"
                exact
                element={<VenuenextCanopyPage />}
              />
              <Route
                path="/disney-home-launcher"
                exact
                element={<DisneyLauncherPage />}
              />
              <Route path="/about" exact element={<AboutPage />} />
              <Route path="/services" exact element={<ServicesPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          )} */}
        </ScrollToTop>
        <Copyright />
      </div>
    </div>
  );
};

export default App;
