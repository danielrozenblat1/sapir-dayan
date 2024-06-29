import styles from "./SecondScreen.module.css"
import sapirMix from "../images/ספיר דיין בואי נכיר.png"
import sapirMix2 from "../images/ספיר דיין בואי נכיר 2.png"
import ScrollReveal from "scrollreveal"
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
<div className={styles.center}><img className={styles.image} src={sapirMix} alt="ספיר דיין בואי נכיר"/></div>
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
    </>
}
export default SecondScreen