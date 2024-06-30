import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./CountUp.module.css";

const CountingUp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.row}>
 

      <div className={styles.font}>
        {inView && <CountUp end={1000} duration={6.5} />}
        <div className={styles.explain}>כלות שעברו את הליווי שלי ליום הכי חשוב בחיים שלהן</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={10000} duration={5} />}
        <div className={styles.explain}>מלוות שאיפרתי</div>
      </div>
    </div>
  );
};

export default CountingUp;