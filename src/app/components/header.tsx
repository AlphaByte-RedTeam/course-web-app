import type { NextPage } from "next";
import VariantWithDescription from "../variant-with-description";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <div className={styles.dashboardInner}>
      <div className={styles.userParent}>
        <VariantWithDescription
          prop="/30373425@2x.png"
          name1="John Doe"
          softwareEngineer="joh.doe@gmail.com"
          variantWithDescriptionFlexShrink="0"
        />
        <img
          className={styles.vuesaxlineararrowDownIcon}
          alt=""
          src="/vuesaxlineararrowdown@2x.png"
        />
      </div>
    </div>
  );
};

export default Header;
