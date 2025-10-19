'use client';

import styles from './ImageControlButton.module.css'; 
import localFont from 'next/font/local';

const buenosAiresBoldFont = localFont({ src: '../../public/fonts/buenos-aires-bold.ttf' });

export default function ImageControlButton({ buttonText, onClick, disabled }) {
  return (
    <button
      className={`${styles.button} ${buenosAiresBoldFont.className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}