import { useState, useEffect } from "react";
import styles from "./FirstScreen.module.css";
import brides from "../images/ספיר דיין כלות.png";
import brides2 from "../images/ספיר דיין כלות טלפונים.png";
import bride from "../Icons/wired-gradient-653-marriage (1).json";
import makeup from "../Icons/wired-gradient-1599-powder-makeup-face (1).json";
import hair from "../Icons/wired-gradient-692-hairdresser-barber (1).json";
import Circle from "../components/circle/Circle";
import logo from "../images/ספיר דיין לוגו.png";
import ScrollReveal from "scrollreveal";
import Button from "../components/button/Button";
import Loader from "../components/loader/Loader"; // Import the loader component

const FirstScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = window.innerWidth > 850 ? brides : brides2;
    img.onload = () => {
      setLoading(false);
      ScrollReveal().reveal(`.${styles.circle}`, {
        duration: 1000,
        distance: "50px",
        origin: "top",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 300,
        delay: 200,
        scale: 1,
      });
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className={styles.background}>
            <img
              className={styles.image}
              alt="ספיר דיין איפור כלות"
              src={window.innerWidth > 850 ? brides : brides2}
            />
          </div>
          <div className={styles.circle}>
            <img className={styles.logo} alt="ספיר דיין לוגו" src={logo} />
          </div>
          <div className={styles.claim}>להראות מושלמת ביום הכי חשוב בחיים שלך</div>
          <h1 className={styles.name}>ספיר דיין</h1>
          <h2 className={styles.description}>מאפרת ומעצבת שיער מקצועית</h2>
          <div className={styles.row}>
            <Circle text="איפור מקצועי" icon={makeup} />
            <Circle text="איפור כלות" icon={bride} />
            <Circle text="עיצוב שיער" icon={hair} />
          </div>
          <Button text="ספיר, מעניין אותי לדעת מה את מציעה לי" />
        </>
      )}
    </>
  );
};

export default FirstScreen;