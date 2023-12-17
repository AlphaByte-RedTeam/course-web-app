import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./chart-styletiny-bar-chart-dark.module.css";

type ChartStyletinyBarChartDarkType = {
  chartTitle?: string;
  group?: string;
  group1?: string;
  group2?: string;
  group3?: string;
  group4?: string;
  group5?: string;

  /** Style props */
  chartTitleAlignSelf?: CSSProperties["alignSelf"];
  chartTitleFontFamily?: CSSProperties["fontFamily"];
};

const ChartStyletinyBarChartDark: NextPage<ChartStyletinyBarChartDarkType> = ({
  chartTitle,
  group,
  group1,
  group2,
  group3,
  group4,
  group5,
  chartTitleAlignSelf,
  chartTitleFontFamily,
}) => {
  const chartTitleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: chartTitleAlignSelf,
      fontFamily: chartTitleFontFamily,
    };
  }, [chartTitleAlignSelf, chartTitleFontFamily]);

  return (
    <div className={styles.chartStyletinybarchartDark}>
      <div className={styles.chartTitle} style={chartTitleStyle}>
        {chartTitle}
      </div>
      <div className={styles.tinybarchartShowcartesiang}>
        <div className={styles.group}>
          <div className={styles.group1}>
            <div className={styles.group1}>
              <img className={styles.groupIcon} alt="" src={group} />
              <img className={styles.groupIcon1} alt="" src={group1} />
              <img className={styles.groupIcon2} alt="" src={group2} />
              <img className={styles.groupIcon3} alt="" src={group3} />
              <img className={styles.groupIcon4} alt="" src={group4} />
              <img className={styles.groupIcon5} alt="" src={group5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartStyletinyBarChartDark;
