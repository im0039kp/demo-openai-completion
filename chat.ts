import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});
const openai = new OpenAIApi(configuration);

const text = "こんにちは、自己紹介してください。";

openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: text,
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })
  .then((completion) => {
    const choices = completion.data.choices[0];
    console.log(choices.text);
  });
