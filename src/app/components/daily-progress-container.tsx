import type { NextPage } from "next";
import styles from "../daily-progress-container.module.css"

const DailyProgressContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.dailyProgressParent}>
        <div className={styles.dailyProgress}>Daily progress</div>
        <img className={styles.modeEditIcon} alt="" src="/mode-edit@2x.png" />
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.dailyGoalParent}>
          <div className={styles.dailyGoal}>Daily goal</div>
          <b className={styles.b}>1</b>
          <div className={styles.dailyGoal}>Hour</div>
        </div>
      </div>
      <div className={styles.dailyGoal}>Completed: 0 minutes</div>
    </div>
  );
};

export default DailyProgressContainer;
