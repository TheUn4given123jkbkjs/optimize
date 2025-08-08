export async function optimizeText(payload) {
  const res = await fetch('http://localhost:8000/api/optimize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}
