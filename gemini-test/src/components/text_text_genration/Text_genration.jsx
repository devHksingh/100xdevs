import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function TextGeneration() {
  const [aiText, setAiText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAIText = async () => {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_KEY);

      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });
        const prompt = 'write an article about tesla truck';
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        setAiText(text);
      } catch (error) {
        console.error('Error fetching AI text:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAIText();
  }, []);

  return (
    <div>
      <h1 className="text-center text-orange-400">Text Generation</h1>
      <div>
        <p>{loading ? 'LOADING ......' : aiText}</p>
      </div>
    </div>
  );
}

export default TextGeneration;
