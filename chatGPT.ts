import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});
const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "私はあなたの役に立つアシスタントです。" },
      { role: "user", content: "2020年のワールドシリーズを制したのは？" },
      {
        role: "assistant",
        content:
          "2020年のワールドシリーズでは、ロサンゼルス・ドジャースが優勝しました。",
      },
      { role: "user", content: "どこで試合がされましたか？" },
    ],
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })
  .then((completion) => {
    const message = completion.data.choices[0].message?.content;
    console.log(message);
  });
