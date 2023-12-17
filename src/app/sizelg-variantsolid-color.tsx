import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./sizelg-variantsolid-color.module.css";

type SizelgVariantsolidColorType = {
  vuesaxboldcup?: string;
  children?: string;
  vuesaxboldcloseCircle?: string;
  startIcon?: boolean;
  endIcon?: boolean;

  /** Style props */
  sizelgVariantsolidColorBackgroundColor?: CSSProperties["backgroundColor"];
  sizelgVariantsolidColorJustifyContent?: CSSProperties["justifyContent"];
  sizelgVariantsolidColorWidth?: CSSProperties["width"];
  vuesaxboldcupIconOverflow?: CSSProperties["overflow"];
  vuesaxboldcupIconFlexShrink?: CSSProperties["flexShrink"];
  buttonColor?: CSSProperties["color"];
};

const SizelgVariantsolidColor: NextPage<SizelgVariantsolidColorType> = ({
  vuesaxboldcup,
  children = "Button",
  vuesaxboldcloseCircle,
  startIcon = true,
  endIcon = true,
  sizelgVariantsolidColorBackgroundColor,
  sizelgVariantsolidColorJustifyContent,
  sizelgVariantsolidColorWidth,
  vuesaxboldcupIconOverflow,
  vuesaxboldcupIconFlexShrink,
  buttonColor,
}) => {
  const sizelgVariantsolidColorStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sizelgVariantsolidColorBackgroundColor,
      justifyContent: sizelgVariantsolidColorJustifyContent,
      width: sizelgVariantsolidColorWidth,
    };
  }, [
    sizelgVariantsolidColorBackgroundColor,
    sizelgVariantsolidColorJustifyContent,
    sizelgVariantsolidColorWidth,
  ]);

  const vuesaxboldcupIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: vuesaxboldcupIconOverflow,
      flexShrink: vuesaxboldcupIconFlexShrink,
    };
  }, [vuesaxboldcupIconOverflow, vuesaxboldcupIconFlexShrink]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.sizelgVariantsolidColor}
      style={sizelgVariantsolidColorStyle}
    >
      {startIcon && (
        <img
          className={styles.vuesaxboldcupIcon}
          alt=""
          src={vuesaxboldcup}
          style={vuesaxboldcupIconStyle}
        />
      )}
      <div className={styles.button} style={buttonStyle}>
        {children}
      </div>
      {endIcon && (
        <img
          className={styles.vuesaxboldcupIcon}
          alt=""
          src={vuesaxboldcloseCircle}
        />
      )}
    </div>
  );
};

export default SizelgVariantsolidColor;
