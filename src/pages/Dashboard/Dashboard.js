import React, { useEffect, useState } from "react";
import logo                           from "../../images/icons/LOGO.svg";
import HomeIcon                       from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton                    from "../../components/UI/Button/Button";

const DashboardPage = () => {
  const [showSplashScreen, toggleWelcome] = useState(true);
  const [points, setPoints] = useState(50);
  const [exp, setExp] = useState(35);
  const [childName, setChildName] = useState("Wojtek")

  useEffect(() => {
    if (showSplashScreen) {
      const timer = setTimeout(() => {
        toggleWelcome(false)
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSplashScreen]);

  const addPoints = () => {
    setPoints(points + 1);
    setExp(exp + 1);
  };

  return (
    <>
      <aside className={showSplashScreen === true ? "welcome" : "welcome--off"}>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </aside>

      {childName}

      <HomeIcon color="primary"/>
      <div>{points}</div>
      <br/>

      <HomeIcon color="secondary"/>{exp}

      <BasicButton
        label="DODAJ PUNKT"
        onClick={addPoints}
      />

      <BasicButton
        label="PRZYZNAJ NAGRODĘ"
      />
      <BasicButton
        label="DAJ KONSEKWENCJĘ"
      />

    </>

  );
};

export default DashboardPage;
