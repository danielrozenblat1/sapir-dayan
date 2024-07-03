import styles from "./FifthScreen.module.css"
import gift from "../Icons/wired-lineal-412-gift (2).json"
import years from "../Icons/wired-lineal-2422-number-14.json"
import plus from "../Icons/wired-lineal-48-plus-to-square-rotation.json"
import Button from "../components/button/Button"
import CountingUp from "../components/count/CountUp"
import Box from "../components/box/Box"
import sapirBride from "../images/ספיר דיין כלה.jpg"
const FifthScreen=()=>{
   

return <>
  <div className={styles.title}> אז מה גרם ל</div>
    <CountingUp/>
    <div className={styles.title}>לבחור בי</div>
    <div className={styles.row}>
    <Box icon={years} description="14 שנות נסיון בתחום"/>
    <Box icon={plus} description="אני גם מאפרת אותך וגם מעצבת את השיער שלך"/>
    <Box icon={gift} description="את מקבלת ממני טיפול פנים וזוהר בחינם ביום החתונה"/>
    </div>
    <div className={styles.description}>חשוב לי לציין שאת מקבלת ממני בנוסף בחינם לגמרי מידע על ספקים, מקום התארגנות והמון ידע מהנסיון הארוך שלי בתחום</div>
    <div className={styles.title}>אז אם</div>
    <div className={styles.description}>את רוצה להראות במיטבך באירוע שלך ? ולהיות הכלה שחלמת עליה ?! תלחצי על הכפתור שמתחת לתמונה ותשלחי לי הודעה</div>
<div className={styles.center}><img className={styles.image} alt="ספיר דיין" src={sapirBride}/></div>
    <Button text="ספיר אני רוצה שנדבר"/>
</>


}
export default FifthScreen