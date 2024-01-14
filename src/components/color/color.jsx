import styles from "./color.module.css";

function Color({ color, code, rgb, hsl, background }) {
  return (
    <>
      <div className={styles.box}>
        <div className={`${styles.color_box} ${styles[background]}`}>
          {color}
        </div>
        <h1 className={styles.code}>{code}</h1>
        <h3 className={styles.rgb}>RGB: {rgb}</h3>
        <h3 className={styles.hsl}>HSL: {hsl}</h3>
      </div>
    </>
  );
}

export default Color;
