import React, { useState } from 'react';
import { optimizeText } from '../api';

export default function TextForm({ onResult }) {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await optimizeText({ text, url });
    onResult(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Enter text" value={text} onChange={e => setText(e.target.value)} />
      <input placeholder="Or enter URL" value={url} onChange={e => setUrl(e.target.value)} />
      <button type="submit">Optimize</button>
    </form>
  );
}
