import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export async function parseTimetable(text: string): Promise<any> {
  const prompt = `Extract a structured timetable (as JSON) from this text:\n${text}`;
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });
  return JSON.parse(response.data.choices[0].message?.content || '{}');
}