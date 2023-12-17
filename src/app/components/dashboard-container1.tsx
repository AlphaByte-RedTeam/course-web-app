import type { NextPage } from "next";
import StyleColorMobileFalse from "../style-color-mobile-false";
import ChartStyletinyBarChartDark from "../chart-styletiny-bar-chart-dark";
import styles from "./dashboard-container1.module.css";

const DashboardContainer1: NextPage = () => {
  return (
    <div className={styles.strip1}>
      <StyleColorMobileFalse
        tryOurNewAdminDashboardTe="Lorem ipsum dolor sit amet consectetur. Ullamcorper mattis nec lacus neque volutpat tellus. Eu viverra pharetra ac odio turpis. Urna ultrices interdum facilisis in morbi. Nibh tellus massa risus ipsum."
        rightColumnImg="/rightcolumnimg@2x.png"
        styleColorMobileFalseBackgroundColor="#0081f1"
        styleColorMobileFalseWidth="734px"
        welcomeToYourFontFamily="Inter"
        welcomeToYourColor="#fff"
        tryOurNewFontFamily="Inter"
        tryOurNewColor="#ededed"
        tryOurNewTextAlign="justify"
      />
      <ChartStyletinyBarChartDark
        chartTitle="Your Progress"
        group="/group@2x.png"
        group1="/group@2x.png"
        group2="/group@2x.png"
        group3="/group@2x.png"
        group4="/group@2x.png"
        group5="/group@2x.png"
        chartTitleAlignSelf="unset"
        chartTitleFontFamily="Inter"
      />
    </div>
  );
};

export default DashboardContainer1;
