import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
console.log(process.env.API_KEY_OPENAI);
const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});
const openai = new OpenAIApi(configuration);

const text = "こんにちは、自己紹介してください。";

openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: text,
    temperature: 0, // ランダム性の制御[0-1]
    max_tokens: 1000, // 返ってくるレスポンストークンの最大数
    top_p: 1.0, // 多様性の制御[0-1]
    frequency_penalty: 0.0, // 周波数制御[0-2]：高いと同じ話題を繰り返さなくなる
    presence_penalty: 0.0, // 新規トピック制御[0-2]：高いと新規のトピックが出現しやすくなる
  })
  .then((completion) => {
    const choices = completion.data.choices[0];
    console.log(choices.text);
  });
