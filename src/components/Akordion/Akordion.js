import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../button/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(to left, #d7b49e, #a67c52)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return <>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">זמן לענות על השאלות שלכן</div>
      <DropdownAccordion title="כמה מלוות את מסכימה לקבל בנוסף לכלה?" content="אני מסכימה לקבל עד 4 מלוות בנוסף לכלה" />
      <DropdownAccordion title="איך עובד תהליך העבודה איתך ?" content="חודש וחצי חודשים לפני החתונה אנחנו מקיימות פגישת יעוץ והיכרות אצלי שאנחנו עוברות ממש על כל התהליך של היום כדי שתגיע הכי רגועה ומוכנה ותהנה מהיום . 
וביום החתונה אני עושה לך איפור ושיער, זה לוקח כמעט כל היום ואם יש גם ליווי אולם אז ממשיך ללילה." />
      <DropdownAccordion title="יש אצלך איפור נסיון? " content="לא, אני לא מאמינה באיפור נסיון מהסיבה הפשוטה העבודות שלך מוצגות לפנייך גם כאן וגם באינסטגרם ויש לך את האופציה לראות את סגנון העבודה שלי ואת האיכות." />
      <DropdownAccordion title="את מגיעה לכל מקום בארץ?" content="ברור! לכלות שלי אני מגיעה לכל מקום ויש לי כבר באוסף כלות גם מאילת ,גם ומשלומי ואפילו מלונדון :)" />
      <DropdownAccordion title="למה נחוץ טיפול הפנים והזוהר?" content="כל כלה שלי בבוקר החתונה איך שאנחנו נפגשות בבוקר קודם כל מקבלת ממני טיפול זוהר לפנים .
שקודם כל מוריד את כל סף הלחץ ,ומרגיע , ובנוסף מכין לנו את העור שתהיי הכי מושלמת ושאף אחד באולם לא יוכל להוריד ממך את העיניים !
כמובן שההכנה של העור הראשונית מהווה לנו גם בסיס לעמידות האיפור וגם שלא יראה לנו איפור ״שפכטל״ שממנו כולן מפחדות ! כי ברגע שהעור מוכן ומוזן היטב הכל יושב עליו בצורה הטובה ביותר! " />
    </div>
    <Button text="ספיר יש לי עוד כמה שאלות אלייך"/>
 </>
}
