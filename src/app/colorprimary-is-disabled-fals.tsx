import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./colorprimary-is-disabled-fals.module.css";

type ColorprimaryIsDisabledFalsType = {
  vuesaxboldmoon?: string;
  vuesaxboldsun?: string;
  children?: string;
  showLabel?: boolean;
  thumbIcon?: boolean;
  vuesaxboldmoonIcon?: boolean;

  /** Style props */
  colorprimaryIsDisabledFalPosition?: CSSProperties["position"];
  colorprimaryIsDisabledFalTop?: CSSProperties["top"];
  colorprimaryIsDisabledFalLeft?: CSSProperties["left"];
};

const ColorprimaryIsDisabledFals: NextPage<ColorprimaryIsDisabledFalsType> = ({
  vuesaxboldmoon,
  vuesaxboldsun,
  children = "Bluetooth",
  showLabel = false,
  thumbIcon = false,
  vuesaxboldmoonIcon,
  colorprimaryIsDisabledFalPosition,
  colorprimaryIsDisabledFalTop,
  colorprimaryIsDisabledFalLeft,
}) => {
  const colorprimaryIsDisabledFalsStyle: CSSProperties = useMemo(() => {
    return {
      position: colorprimaryIsDisabledFalPosition,
      top: colorprimaryIsDisabledFalTop,
      left: colorprimaryIsDisabledFalLeft,
    };
  }, [
    colorprimaryIsDisabledFalPosition,
    colorprimaryIsDisabledFalTop,
    colorprimaryIsDisabledFalLeft,
  ]);

  return (
    <div
      className={styles.colorprimaryIsdisabledfals}
      style={colorprimaryIsDisabledFalsStyle}
    >
      {thumbIcon && (
        <div className={styles.wrapper}>
          <div className={styles.thumb}>
            {!vuesaxboldmoonIcon && (
              <img
                className={styles.vuesaxboldmoonIcon}
                alt=""
                src={vuesaxboldmoon}
              />
            )}
          </div>
          <img
            className={styles.vuesaxboldmoonIcon}
            alt=""
            src={vuesaxboldsun}
          />
        </div>
      )}
      {showLabel && <div className={styles.bluetooth}>{children}</div>}
    </div>
  );
};

export default ColorprimaryIsDisabledFals;
