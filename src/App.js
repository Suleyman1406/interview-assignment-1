import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/";
import {
  HOME_SCREEN,
  STARED_REPOS_SCREEN,
  WELCOME_SCREEN,
} from "./contants/navigations";
import { HomeScreen, StaredReposScreen, WelcomeScreen } from "./screens";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route exact path={HOME_SCREEN} element={<HomeScreen />} />
          <Route
            exact
            path={STARED_REPOS_SCREEN}
            element={<StaredReposScreen />}
          />
          <Route exact path={WELCOME_SCREEN} element={<WelcomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
