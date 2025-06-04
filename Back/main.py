# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# フロントとの通信を許可
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/profile")
def profile():
    return {"name": "Mt.Book",
            "lang": "日本語",
            "teck-lang": "TypeScript, C#",
            "comment":"棗いつきはいいぞ"}
