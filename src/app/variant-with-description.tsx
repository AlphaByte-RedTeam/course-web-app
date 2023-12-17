import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./variant-with-description.module.css";

type VariantWithDescriptionType = {
  prop?: string;
  name1?: string;
  softwareEngineer?: string;

  /** Style props */
  variantWithDescriptionFlexShrink?: CSSProperties["flexShrink"];
};

const VariantWithDescription: NextPage<VariantWithDescriptionType> = ({
  prop,
  name1 = "Junior Garcia",
  softwareEngineer,
  variantWithDescriptionFlexShrink,
}) => {
  const variantWithDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: variantWithDescriptionFlexShrink,
    };
  }, [variantWithDescriptionFlexShrink]);

  return (
    <div
      className={styles.variantwithdescription}
      style={variantWithDescriptionStyle}
    >
      <div className={styles.spanflex}>
        <img className={styles.icon} alt="" src={prop} />
      </div>
      <div className={styles.divinlineFlex}>
        <div className={styles.juniorGarcia}>{name1}</div>
        <div className={styles.softwareEngineer}>{softwareEngineer}</div>
      </div>
    </div>
  );
};

export default VariantWithDescription;
