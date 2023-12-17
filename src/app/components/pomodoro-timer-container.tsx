import type { NextPage } from "next";
import styles from "./pomodoro-timer-container.module.css";

const PomodoroTimerContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.pomodorTimerParent}>
        <div className={styles.pomodorTimer}>Pomodor Timer</div>
        <img className={styles.modeEditIcon} alt="" src="/mode-edit@2x.png" />
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <b className={styles.b}>00:20:00</b>
      </div>
      <div className={styles.buttonParent}>
        <img className={styles.buttonIcon} alt="" src="/button@2x.png" />
        <img className={styles.buttonIcon} alt="" src="/button@2x.png" />
      </div>
    </div>
  );
};

export default PomodoroTimerContainer;
