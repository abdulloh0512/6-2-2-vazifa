import styles from "./button.module.css";

function Button({ color, name, background }) {
  return (
    <div className={styles.box}>
      <div className={`${styles.color_box} ${styles[background]}`}>{color}</div>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
}

export default Button