from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import os

app = FastAPI()

class OptimizeRequest(BaseModel):
    text: str = None
    url: str = None

@app.post("/api/optimize")
def optimize_text(req: OptimizeRequest):
    if not req.text and not req.url:
        raise HTTPException(status_code=400, detail="Provide text or URL")
    
    content = req.text
    if req.url:
        try:
            resp = requests.get(req.url, timeout=5)
            resp.raise_for_status()
            content = resp.text
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Error fetching URL: {e}")
    
    # Giả lập optimize bằng cách trả text đơn giản (chỗ này thay bằng AI thật)
    result = {
        "optimized": content[:200] + "...",
        "key_points": ["Point 1", "Point 2"],
        "concepts": ["Concept A", "Concept B"],
        "conclusion": "This is a summarized conclusion."
    }
    return result
