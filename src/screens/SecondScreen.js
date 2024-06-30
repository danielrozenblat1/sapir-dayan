import styles from "./SecondScreen.module.css"
import sapirMix from "../images/ספיר דיין בואי נכיר.png"
import sapirMix2 from "../images/ספיר דיין בואי נכיר 2.png"
import ScrollReveal from "scrollreveal"
import sapircatava from "../images/ספיר דיין כתבה.png"
import sapircatava2 from "../images/ספיר דיין כתבה 2.png"
import { useEffect } from "react"
const SecondScreen=()=>{
useEffect(()=>{
    ScrollReveal().reveal(`.${styles.description}`, {
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
},[])


    return <>
    <div className={styles.title}>בואי נכיר</div>
    <div className={styles.description}>הסיפור שלי התחיל אי שם בילדות מגיל קטן כל התחום של היצרה ועיצוב מאוד משך אותי
ובתור ילדה היה לי את כל סוגי הברביות ומלא איפור ההורים שלי ראו שאני מאוד אוהבת
ומתחברת לתחום וקנו לי באמת הכל . הייתי מפשיטה את הבובות ותופרת להן בגדים מנקה
להן את הפנים ומאפרת ומחליפה להן תסרוקות בשיער .</div>
<div className={styles.center}><img className={styles.image1} src={sapirMix} alt="ספיר דיין בואי נכיר"/></div>
<div className={styles.description}>ככל שגדלתי הייתי מתאמנת על עצמי ועל כל מי שהייתי תופסת בדרך
שהכלה הראשונה שלי הייתה שהייתי רק בת 15 חברה של אמא שלי התחתנה בשנית וקבעה
לי עובדה את המאפרת שלי! היא מאוד אהבה את הסגנון איפור שלי שהוא יותר עדין וגלואו,
. ובמיוחד אחרי שהייתה בטראומה מהאיפור בחתונה הראשונה שלה</div>
<div className={styles.center}><img className={styles.image} src={sapirMix2} alt="ספיר דיין בואי נכיר 2"/></div>
<div className={styles.description}>הגיע היום! ואחרי שאיפרתי אותה וראיתי את המפגש ואת כל התהליך של היום המרגש הזה
הבנתי שזה היעוד שלי בחיים, התחושת סיפוק והאושר שלי ושל הכלה מולי שרואה את
עצמה במראה בפעם הראשונה זה משהו שלא ניתן לתאר במילים ובמיוחד שזה גם העבודה
. שלך</div>
<div className={styles.bold}>והתחלתי לעשות הכל כדי שכל העולם יבין וידע מי זאת ספיר דיין</div>
<div className={styles.title}>והיום..</div>
<div className={styles.bold}>היום אני כבר כתבו עלי ב..</div>
<div className={styles.description}>(לחצי על התמונה כדי להכנס לכתבה)</div>
<div className={styles.center}><a  target="_blank" href="https://shishi-bair.co.il/2023/01/12/%d7%a9%d7%99%d7%a9%d7%99-%d7%91%d7%a2%d7%99%d7%a8-%d7%a8%d7%9e%d7%9c%d7%94-%d7%9c%d7%95%d7%93-%d7%9b%d7%9c-%d7%94%d7%97%d7%93%d7%a9%d7%95%d7%aa-577/"><img className={styles.image} src={sapircatava} alt="ספיר דיין כתבה"/></a> </div>
<div className={styles.bold}>וגם בערוץ 12</div>
<div className={styles.description}>(לחצי על התמונה כדי להכנס לכתבה)</div>
<div className={styles.center}><a  target="_blank" href="https://www.instagram.com/tv/CYEfUCBJAJd/?igsh=MWh4Y2YyZXQxcHFkdA=="><img className={styles.image} src={sapircatava2} alt="ספיר דיין כתבה 2"/></a> </div>
 
    </>
}
export default SecondScreen