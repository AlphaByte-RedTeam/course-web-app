import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./style-color-mobile-false.module.css";

type StyleColorMobileFalseType = {
  tryOurNewAdminDashboardTe?: string;
  rightColumnImg?: string;

  /** Style props */
  styleColorMobileFalseBackgroundColor?: CSSProperties["backgroundColor"];
  styleColorMobileFalseWidth?: CSSProperties["width"];
  welcomeToYourFontFamily?: CSSProperties["fontFamily"];
  welcomeToYourColor?: CSSProperties["color"];
  tryOurNewFontFamily?: CSSProperties["fontFamily"];
  tryOurNewColor?: CSSProperties["color"];
  tryOurNewTextAlign?: CSSProperties["textAlign"];
};

const StyleColorMobileFalse: NextPage<StyleColorMobileFalseType> = ({
  tryOurNewAdminDashboardTe,
  rightColumnImg,
  styleColorMobileFalseBackgroundColor,
  styleColorMobileFalseWidth,
  welcomeToYourFontFamily,
  welcomeToYourColor,
  tryOurNewFontFamily,
  tryOurNewColor,
  tryOurNewTextAlign,
}) => {
  const styleColorMobileFalseStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: styleColorMobileFalseBackgroundColor,
      width: styleColorMobileFalseWidth,
    };
  }, [styleColorMobileFalseBackgroundColor, styleColorMobileFalseWidth]);

  const welcomeToYourStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: welcomeToYourFontFamily,
      color: welcomeToYourColor,
    };
  }, [welcomeToYourFontFamily, welcomeToYourColor]);

  const tryOurNewStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: tryOurNewFontFamily,
      color: tryOurNewColor,
      textAlign: tryOurNewTextAlign,
    };
  }, [tryOurNewFontFamily, tryOurNewColor, tryOurNewTextAlign]);

  return (
    <div
      className={styles.stylecolorMobilefalse}
      style={styleColorMobileFalseStyle}
    >
      <div className={styles.leftcolumn}>
        <b className={styles.welcomeToYour} style={welcomeToYourStyle}>
          Welcome to your dashboard!
        </b>
        <div className={styles.tryOurNew} style={tryOurNewStyle}>
          {tryOurNewAdminDashboardTe}
        </div>
      </div>
      <img className={styles.rightcolumnimgIcon} alt="" src={rightColumnImg} />
    </div>
  );
};

export default StyleColorMobileFalse;
