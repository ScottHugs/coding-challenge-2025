import ApiDisplay from "./components/ApiDisplay";
import { fetchApiData } from "./lib/utils";
import styles from "./page.module.css";
import { Suspense } from 'react';

export default function Home() {

  const whippetImagesPromise = fetchApiData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>nib coding challenge 2025</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ApiDisplay whippetImagesPromise={whippetImagesPromise}/>
        </Suspense>
      </main>
    </div>
  );
}
