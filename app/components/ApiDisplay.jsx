'use client';

import { use, useState } from 'react';
import styles from './ApiDisplay.module.css';

import localFont from 'next/font/local';
const buenosAiresBoldFont = localFont({ src: '../../public/fonts/buenos-aires-bold.ttf' });

export default function ApiDisplay({ whippetImagesPromise }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const whippetImages = use(whippetImagesPromise) // Suspense in main handles loading state.
  const numberOfImages = whippetImages.message.length;

  return (
    <section>

      <div className="api-display">
        <img src={whippetImages.message[currentIndex]} className={styles.image} />
      </div>

      <div className={styles.buttonContainer}>

        <button
          className={`${styles.button} ${buenosAiresBoldFont.className}`}
          onClick={() => setCurrentIndex((numberOfImages + currentIndex - 1) % numberOfImages)} // Logic for continuous looping of images.
        >
          Previous
        </button>
        
        <button
          className={`${styles.button} ${buenosAiresBoldFont.className}`}
          onClick={() => setCurrentIndex((numberOfImages + currentIndex + 1) % numberOfImages)} // Logic for continuous looping of images.
        >
          Next
        </button>
        
      </div>

    </section>
  );
}