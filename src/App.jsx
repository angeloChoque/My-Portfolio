import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/contactMe";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/My-Portfolio"
          element={
            <>
              <Home />
              <AboutMe />
              <Projects />
              <ContactMe/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
