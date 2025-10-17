import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>nib coding challenge 2025</h1>
        <div className="api-display-area">
          <img src="temp.jpg" alt="temporary image of newcastle baths"  className="api-image"/>
        </div>
        <p className="comment">Temporary fun comment.</p>
        <div className="button-group">
          <button className="previous-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
      </main>
    </div>
  );
}
