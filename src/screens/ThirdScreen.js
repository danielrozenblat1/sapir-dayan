import styles from "./ThirdScreen.module.css"
import result1 from "../images/ספיר דיין לקוחות ממליצות 1.png"
import result2 from "../images/ספיר דיין לקוחות ממליצות 2.png"
import result3 from "../images/ספיר דיין לקוחות ממליצות 3.png"
import result4 from "../images/ספיר דיין לקוחות ממליצות 4.png"
import result5 from "../images/ספיר דיין לקוחות ממליצות 5.png"
import result6 from "../images/ספיר דיין לקוחות ממליצות 6.png"
import result7 from "../images/ספיר דיין לקוחות ממליצות 7.png"
import result8 from "../images/ספיר דיין לקוחות ממליצות 8.png"
import result9 from "../images/ספיר דיין לקוחות ממליצות 9.png"
import result10 from "../images/ספיר דיין לקוחות ממליצות 10.png"
import result11 from "../images/ספיר דיין לקוחות ממליצות 11.png"
import result12 from "../images/ספיר דיין לקוחות ממליצות 12.png"
import result13 from "../images/ספיר דיין לקוחות ממליצות 13.png"
import result14 from "../images/ספיר דיין לקוחות ממליצות 14.png"
import result15 from "../images/ספיר דיין לקוחות ממליצות 15.png"
import result16 from "../images/ספיר דיין לקוחות ממליצות 16.png"
import result17 from "../images/ספיר דיין לקוחות ממליצות 17.png"
import result18 from "../images/ספיר דיין לקוחות ממליצות 18.png"
import result19 from "../images/ספיר דיין לקוחות ממליצות 19.png"
import result20 from "../images/ספיר דיין לקוחות ממליצות 20.png"
import result21 from "../images/ספיר דיין לקוחות ממליצות 21.png"
import result22 from "../images/ספיר דיין לקוחות ממליצות 22.png"
import result23 from "../images/ספיר דיין לקוחות ממליצות 23.png"
import result24 from "../images/ספיר דיין לקוחות ממליצות 24.png"
import result25 from "../images/ספיר דיין לקוחות ממליצות 25.png"



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import Button from "../components/button/Button"

const ThirdScreen=()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : window.innerWidth < 1150 ? 3 :4,
        slidesToScroll:1,
  
      };
   
    const content = [
        {
          type: 'image',
          src: result1,
        },
        {
            type: 'image',
            src: result2,
          },
          {
            type: 'image',
            src: result3,
          },
          {
            type: 'image',
            src: result9,
          },
          {
              type: 'image',
              src: result10,
            },
          {
            type: 'image',
            src: result4,
          },
          {
            type: 'image',
            src: result5,
          },

        {
          type: 'image',
          src: result6,
        },
        {
          type: 'image',
          src: result7,
        },
        {
          type: 'image',
          src: result8,
        },
  
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
            type: 'image',
            src: result13,
          },
          {
            type: 'image',
            src: result14,
          },
          {
            type: 'image',
            src: result15,
          },
          {
            type: 'image',
            src: result16,
          },
          {
            type: 'image',
            src: result17,
          },
          {
            type: 'image',
            src: result18,
          },
          {
            type: 'image',
            src: result19,
          },
          {
            type: 'image',
            src: result20,
          },
          {
            type: 'image',
            src: result21,
          },
          {
            type: 'image',
            src: result22,
          },
          {
            type: 'image',
            src: result23,
          },
          {
            type: 'image',
            src: result24,
          },
          {
            type: 'image',
            src: result25,
          },
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות ממליצות">
<div className={styles.title}>ואני אתן להן לדבר בשמי..</div>
<div className={styles.explain}>אספתי לקט ממאות ההודעות שאני מקבלת מכן.. מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ספיר דיין לקוחה ממליצה מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
  <Button text="ספיר, בואי נדבר"/>
  </div>
    </>
}
export default ThirdScreen