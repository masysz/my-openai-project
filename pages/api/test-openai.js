// /pages/api/test-openai.js
import { Configuration, OpenAIApi } from 'openai';

export default async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.listEngines();
    res.status(200).json({ message: 'OpenAI API is working!', data: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
