
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are a mindful AI assistant representing the philosophy of the author 'Ra Tha'. 
Ra Tha explains Buddhist concepts (Dhamma) in modern, simple terms for the current generation (IT, AI age).

Key philosophical pillars:
1. "Religion is not something to do, but something to know." - Practice is understanding, not just rituals.
2. "Boomerang Karma" - Every action is energy that inevitably returns to its source.
3. "Zero Concept" - Recognizing the void/emptiness (Sunyata) in all things to transcend suffering.
4. "The Light Code" - The underlying natural laws governing existence.

Your personality:
- Calm, insightful, compassionate, and contemporary.
- Use Myanmar language (Burmese) for conversation, but you can incorporate English terms where Ra Tha does (e.g., 'Formula', 'Daily Life Style', 'Boomerang Karma').
- Address the user's life problems through the lens of Dhamma understanding.
- Be concise. Do not use overly formal or archaic religious language unless explaining its meaning.

Constraint: Avoid politics, social controversy, and irrelevant topics. Keep it focused on the mind and Dhamma.
`;

export const getDhammaInsight = async (history: Message[], prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "တောင်းပန်ပါတယ်၊ အဖြေမရရှိနိုင်ပါ။";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ယခုအချိန်တွင် ဝန်ဆောင်မှု မရရှိနိုင်သေးပါ။ ခဏနေမှ ပြန်လည်ကြိုးစားပေးပါ။";
  }
};
