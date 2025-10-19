'use client';

export default function ErrorBoundary({ error, reset }) {
  return (
    <div>
      <h2>Oh no! The whippets must be resting. Try again shortly.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}