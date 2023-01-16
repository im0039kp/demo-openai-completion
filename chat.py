
import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv('API_KEY_OPENAI')

prompt = "こんにちは、自己紹介してください。"

response = openai.Completion.create(
  model='text-davinci-003',
  prompt=prompt,
  temperature=0.4,
  max_tokens=64,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
)

texts = ''.join([choice['text'] for choice in response.choices])
print(texts)