import styles from "./typograph.module.css";
function Typograph() {
  return (
      <div className={styles.titles}>
        <h1 className={styles.titleh1}>Typography</h1>
        <h5>
          Heading XL Plus Jakarta Sans Extra Bold <span>56px</span> 70px Line
        </h5>
        <h1 className={styles.titleh2}>Increase your skill with minimal budget</h1>
        <h5>
          Heading L Plus Jakarta Sans Extra Bold <span>40px</span> 51px Line
        </h5>
        <h2>Users all around the globe</h2>
        <h5>
          Heading M Plus Jakarta Sans Extra Bold <span>32px</span> 40px Line
        </h5>
        <h2>Check out our most popular courses</h2>
        <h5>
          Heading S Plus Jakarta Sans Extra Bold <span>24px</span> 28px Line
        </h5>
      </div>
  );
}

export default Typograph;
