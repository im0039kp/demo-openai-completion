
import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv('API_KEY_OPENAI')

prompt = "こんにちは、自己紹介してください。"

response = openai.Completion.create(
  model='text-davinci-003',
  prompt=prompt,
  temperature=0, # ランダム性の制御[0-1]
  max_tokens=1000, # 返ってくるレスポンストークンの最大数
  top_p=1.0, # 多様性の制御[0-1]
  frequency_penalty=0.0, # 周波数制御[0-2]：高いと同じ話題を繰り返さなくなる
  presence_penalty=0.0 # 新規トピック制御[0-2]：高いと新規のトピックが出現しやすくなる
)

texts = ''.join([choice['text'] for choice in response.choices])
print(texts)