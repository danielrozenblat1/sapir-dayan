import styles from "./NewImageGrid.module.css"
import Button from "../../components/button/Button"
import grid1 from "../../videos/ספיר דיין כלה סרטון 1.mp4"
import grid2 from "../../videos/ספיר דיין כלה סרטון 2.mp4"
import grid3 from "../../videos/ספיר דיין כלה סרטון 3.mp4"
import grid4 from "../../videos/ספיר דיין כלה סרטון 4.mp4"
import grid5 from "../../videos/ספיר דיין כלה סרטון 5.mp4"
import grid6 from "../../videos/ספיר דיין כלה סרטון 6.mp4"

import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"

const NewImagesGrid=()=>{

const [zoom,setZoom]=useState(false)


    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image1}`, {
            duration: 600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image2}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image3}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
    },[])
    return <>
<div className={styles.title}>לפני שאענה לכל השאלות שלכן</div>
<div className={styles.description}>גללו למטה והתרשמו</div>
    <div className={styles.container}>
    <div className={styles.row2}>
    <video className={styles.image3}  muted playsInline controls alt="ספיר דיין כלות">
                    <source src={grid1} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted playsInline controls alt="ספיר דיין כלות">
                    <source src={grid2} type="video/mp4" />
                </video>
    <video className={styles.image3}  muted playsInline controls alt="ספיר דיין כלות">
                    <source src={grid3} type="video/mp4" />
                </video>
     
        
   
    </div>
    <div className={styles.row2}>
    <video className={styles.image3}  muted playsInline controls alt="ספיר דיין כלות">
                    <source src={grid6} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted playsInline controls alt="ספיר דיין כלות">
                    <source src={grid4} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted playsInline controls alt="ספיר דיין כלות">
                    <source src={grid5} type="video/mp4" />
                </video>
        
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="ספיר דיין כלות"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>


    </div> */}
  

    </div>
    <div className={styles.description}>וזו רק טעימה קטנה מתוך עשרות סרטונים..</div>
    <Button text="לחצי כאן לעוד מידע" />
    </>
    }
    export default NewImagesGrid