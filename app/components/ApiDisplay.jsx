'use client';

import { use, useState } from 'react';
import styles from './ApiDisplay.module.css';
import ImageControlButton from './ImageControlButton';

import localFont from 'next/font/local';
const buenosAiresBoldFont = localFont({ src: '../../public/fonts/buenos-aires-bold.ttf' });

export default function ApiDisplay({ whippetImagesPromise }) {

  const whippetImages = use(whippetImagesPromise) // Suspense in main handles loading state.
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfImages = whippetImages.message?.length || 0;

  // Add early return if no images
  if (numberOfImages === 0) {
    return <div>No images available</div>;
  }


  // Handlers for image control buttons.
  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
  }
  const previousImage = () => {
    setCurrentIndex(currentIndex - 1);
  }

   const startImage = () => {
    setCurrentIndex(0);
  }
   const lastImage = () => {
    setCurrentIndex(numberOfImages - 1); 
  }


  return (
    <section className={styles.apiDisplaySection}>

      <div className="api-display">
        <img src={whippetImages.message[currentIndex]} className={styles.image} alt={`Whippet ${currentIndex + 1} of ${numberOfImages}`}/>
      </div>

      <div className={styles.buttonContainer}>
        <ImageControlButton buttonText="Start" onClick={startImage} />
        <ImageControlButton buttonText="Previous" onClick={previousImage} disabled={currentIndex === 0}/>
        <ImageControlButton buttonText="Next" onClick={nextImage} disabled={currentIndex === (numberOfImages - 1)}/>
        <ImageControlButton buttonText="Last" onClick={lastImage}/>
      </div>

    </section>
  );
}