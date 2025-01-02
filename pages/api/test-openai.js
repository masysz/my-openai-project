// /pages/api/test-openai.js
import { Configuration, OpenAIApi } from "openai";

export default async (req, res) => {
  if (req.method === "POST") {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY, // Menggunakan key dari env
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.listEngines(); // List engines untuk testing OpenAI
      res.status(200).json({ message: "OpenAI API is working!", data: response.data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed. Use POST." }); // Hanya metode POST yang diizinkan
  }
};
