import "./App.css";
import Header from "./sections/Header";
import { context } from "./contexts/context";
import { useEffect, useState } from "react";
import Sidebar from "./sections/Sidebar";
import Feed from "./Feed";
import Widgets from "./sections/Widgets";
import Login from "./Login";
import { actionTypes } from "./contexts/reducer";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const [theme, setTheme] = useState("light");
  const [sidebar, setSidebar] = useState("hide");

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: user,
      });
    });
  }, []);

  return (
    <div>
      <context.Provider
        value={{
          theme,
          setTheme,
          sidebar,
          setSidebar,
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                !user ? (
                  <Login />
                ) : (
                  <>
                    <Header />

                    <div className="flex">
                      <Sidebar />
                      <Feed />
                      <Widgets />
                    </div>
                  </>
                )
              }
            />
            <Route
              path="/home"
              element={
                user ? (
                  <>
                    <Header />

                    <div className="flex">
                      <Sidebar />
                      <Feed />
                      <Widgets />
                    </div>
                  </>
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;
