from supabase import Client, create_client
from dotenv import load_dotenv
import os
from fastapi import FastAPI

# ローカル環境なら .env.local を読み込む
if os.getenv("GAE_ENV") is None:  # Cloud Run 環境では GAE_ENV が設定される
    load_dotenv("../.env.local")

URL = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
KEY = os.getenv("NEXT_PUBLIC_SUPABASE_ANON_KEY")

supabase: Client = create_client(URL, KEY)

app = FastAPI()

@app.get("/")
def read_root():
    response = supabase.table("todos").select("*").execute()
    return response

@app.get("/env")
def read_env():
    return {"URL": URL, "KEY": KEY}
