import styles from "./FifthScreen.module.css"
import gift from "../Icons/wired-lineal-412-gift (2).json"
import years from "../Icons/wired-lineal-2422-number-14.json"
import plus from "../Icons/wired-lineal-48-plus-to-square-rotation.json"
import Button from "../components/button/Button"
import CountingUp from "../components/count/CountUp"
import Box from "../components/box/Box"

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
    <Button text="ספיר אני רוצה שנדבר"/>
</>


}
export default FifthScreen