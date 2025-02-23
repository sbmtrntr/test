from supabase import Client, create_client
from dotenv import load_dotenv
import os

# .env.local ファイルを読み込む
load_dotenv(dotenv_path='../.env.local')

URL = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
KEY = os.getenv("NEXT_PUBLIC_SUPABASE_ANON_KEY")

supabase: Client = create_client(URL, KEY)

# データを挿入
# data_to_insert = {
#     "name": "田中次郎",
#     "email": "tanaka.jiro@example.com",  # 既存と異なるメールアドレスを指定
#     "slack_id": "U99001123",
#     "created_at": "2023-05-21"
# }

# response = supabase.table("users").insert(data_to_insert).execute()
# print(response)


# データを取得
response = supabase.table("todos").select("*").execute()
print("Select Response:", response)