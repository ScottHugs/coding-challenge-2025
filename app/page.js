import ApiDisplay from "./components/ApiDisplay";
import { fetchApiData } from "./lib/utils";
import styles from "./page.module.css";
import { Suspense} from 'react';


import localFont from 'next/font/local';
const fakeGrenetteProFont = localFont({ src: '../public/fonts/CrimsonPro-SemiBold.ttf' });

export default function Home() {

  const whippetImagesPromise = fetchApiData(); // Start fetching data from API.

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={`${styles.heading} ${fakeGrenetteProFont.className}`}>
            Think of everything you could do with nib Pet Insurance... for your whippet.
        </h1>

        <p className={styles.comment}>
            We don't even do pet insurance, but for you, we'll whippet something up. See some of our most recent, fur-members enjoying their cover.
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ApiDisplay whippetImagesPromise={whippetImagesPromise}/>
        </Suspense>

      </main>
    </div>
  );
}
