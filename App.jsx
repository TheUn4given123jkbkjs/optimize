import React, { useState } from 'react';
import TextForm from './components/TextForm';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  const [result, setResult] = useState(null);
  return (
    <div style={{padding: '20px'}}>
      <h1>Text Optimizer</h1>
      <TextForm onResult={setResult} />
      {result && <ResultDisplay data={result} />}
    </div>
  );
}
