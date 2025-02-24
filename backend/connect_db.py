from flask import Flask, jsonify
from flask_cors import CORS
from supabase import Client, create_client
from dotenv import load_dotenv
import os

# ローカル環境なら .env.local を読み込む
if os.getenv("GAE_ENV") is None:  # Cloud Run 環境では GAE_ENV が設定される
    load_dotenv("../.env.local")

URL = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
KEY = os.getenv("NEXT_PUBLIC_SUPABASE_ANON_KEY")

supabase: Client = create_client(URL, KEY)

app = Flask(__name__)
CORS(app)  # すべてのオリジンからのアクセスを許可

@app.route("/", methods=["GET"])
def read_root():
    response = supabase.table("todos").select("*").execute()
    return jsonify(response)  

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
