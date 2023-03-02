import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv('API_KEY_OPENAI')

response = openai.ChatCompletion.create(
  model='gpt-3.5-turbo',
  messages=[
        {"role": "system", "content": "私はあなたの役に立つアシスタントです。"},
        {"role": "user", "content": "2020年のワールドシリーズを制したのは？"},
        {"role": "assistant", "content": "2020年のワールドシリーズでは、ロサンゼルス・ドジャースが優勝しました。"},
        {"role": "user", "content": "どこで試合がされましたか？"}
    ],
  temperature=0.4,
  max_tokens=64,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
)

texts = response["choices"][0]["message"]["content"]
print(texts)