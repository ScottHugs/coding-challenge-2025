'use client';

import { use, useState } from 'react';

export default function ApiDisplay({ whippetImagesPromise }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const whippetImages = use(whippetImagesPromise)
  console.log(whippetImages[1]);

  return (
    <section>
      <div className="api-display">
        <img src={whippetImages.message[currentIndex]} alt="" />
      </div>

      <div className="button-group">
        <button
          className="previous-button"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))}
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex < whippetImages.message.length - 1 ? prevIndex + 1 : prevIndex))}
        >
          Next
        </button>
      </div>

    </section>
  );
}
