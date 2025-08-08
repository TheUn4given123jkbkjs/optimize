import React from 'react';

export default function ResultDisplay({ data }) {
  return (
    <div>
      <h2>Optimized Text</h2>
      <p>{data.optimized}</p>
      <h3>Key Points</h3>
      <ul>{data.key_points.map((p, i) => <li key={i}>{p}</li>)}</ul>
      <h3>Concepts</h3>
      <ul>{data.concepts.map((c, i) => <li key={i}>{c}</li>)}</ul>
      <h3>Conclusion</h3>
      <p>{data.conclusion}</p>
    </div>
  );
}
