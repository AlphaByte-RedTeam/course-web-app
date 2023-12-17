import type { NextPage } from "next";
//import SizelgVariantsolidColor from "./sizelg-variantsolid-color";
import SizelgVariantsolidColor from "../sizelg-variantsolid-color"
import ColorprimaryIsDisabledFals from "../colorprimary-is-disabled-fals";
import styles from "./dashboard-container.module.css";

const DashboardContainer: NextPage = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        <img className={styles.logoChild} alt="" src="/group-1@2x.png" />
      </div>
      <div className={styles.buttonParent}>
        <SizelgVariantsolidColor
          vuesaxboldcup="/dashboard@2x.png"
          children="Dashboard"
          vuesaxboldcloseCircle="/vuesaxboldclosecircle@2x.png"
          startIcon
          endIcon={false}
          sizelgVariantsolidColorBackgroundColor="#006fee"
          sizelgVariantsolidColorJustifyContent="flex-start"
          sizelgVariantsolidColorWidth="199px"
          vuesaxboldcupIconOverflow="hidden"
          vuesaxboldcupIconFlexShrink="0"
          buttonColor="#fff"
        />
        <SizelgVariantsolidColor
          vuesaxboldcup="/library-books@2x.png"
          children="My Course"
          vuesaxboldcloseCircle="/vuesaxboldclosecircle@2x.png"
          startIcon
          endIcon={false}
          sizelgVariantsolidColorBackgroundColor="unset"
          sizelgVariantsolidColorJustifyContent="flex-start"
          sizelgVariantsolidColorWidth="199px"
          vuesaxboldcupIconOverflow="hidden"
          vuesaxboldcupIconFlexShrink="0"
          buttonColor="#000"
        />
        <SizelgVariantsolidColor
          vuesaxboldcup="/workspace-premium@2x.png"
          children="Certificate"
          vuesaxboldcloseCircle="/vuesaxboldclosecircle@2x.png"
          startIcon
          endIcon={false}
          sizelgVariantsolidColorBackgroundColor="unset"
          sizelgVariantsolidColorJustifyContent="flex-start"
          sizelgVariantsolidColorWidth="199px"
          vuesaxboldcupIconOverflow="hidden"
          vuesaxboldcupIconFlexShrink="0"
          buttonColor="#000"
        />
        <SizelgVariantsolidColor
          vuesaxboldcup="/chat@2x.png"
          children="Discussion"
          vuesaxboldcloseCircle="/vuesaxboldclosecircle@2x.png"
          startIcon
          endIcon={false}
          sizelgVariantsolidColorBackgroundColor="unset"
          sizelgVariantsolidColorJustifyContent="flex-start"
          sizelgVariantsolidColorWidth="199px"
          vuesaxboldcupIconOverflow="hidden"
          vuesaxboldcupIconFlexShrink="0"
          buttonColor="#000"
        />
      </div>
      <ColorprimaryIsDisabledFals
        vuesaxboldmoon="/vuesaxboldmoon@2x.png"
        vuesaxboldsun="/vuesaxboldsun@2x.png"
        children="Dark Mode"
        showLabel
        thumbIcon
        vuesaxboldmoonIcon
        colorprimaryIsDisabledFalPosition="absolute"
        colorprimaryIsDisabledFalTop="903px"
        colorprimaryIsDisabledFalLeft="calc(50% - 84.5px)"
      />
    </div>
  );
};

export default DashboardContainer;
