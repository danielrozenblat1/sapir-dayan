import styles from "./ForthScreen.module.css"
import result1 from "../images/ספיר דיין כלה 1.png"
import result2 from "../images/ספיר דיין כלה 2.png"
import result3 from "../images/ספיר דיין כלה 3.png"
import result4 from "../images/ספיר דיין כלה 4.png"
import result5 from "../images/ספיר דיין כלה 5.png"
import result6 from "../images/ספיר דיין כלה 6.png"
import result7 from "../images/ספיר דיין כלה 7.png"
import result8 from "../images/ספיר דיין כלה 8.png"
import result9 from "../images/ספיר דיין כלה 9.png"
import result10 from "../images/ספיר דיין כלה 10.png"
import result11 from "../images/ספיר דיין כלה 11.png"
import result12 from "../images/ספיר דיין כלה 12.png"
import result13 from "../images/ספיר דיין כלה 13.png"
import result14 from "../images/ספיר דיין כלה 14.png"
import result15 from "../images/ספיר דיין כלה 15.png"
import result16 from "../images/ספיר דיין כלה 16.png"




import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import Button from "../components/button/Button"

const ForthScreen=()=>{

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
          src: result6,
        }, 
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
                src: result5,
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
            src: result3,
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
              src: result9,
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
            src: result16,
          },

         
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות ממליצות">
<div className={styles.title}>הנה טעימה מהכלות שליוויתי</div>
<div className={styles.explain}>אספתי קמצוץ מבין הכלות המדהימות שאיפרתי וליוויתי, מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ספיר דיין כלה מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
  <Button text="ספיר, בואי נדבר"/>
  </div>
    </>
}
export default ForthScreen