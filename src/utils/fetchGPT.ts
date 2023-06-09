import { prompts } from '~/constants';
import { chatCompletionSchema } from '~/types';

export const fetchGPT = async (promptKey: string, userContent: string) => {
  const prompt = prompts.find((p) => p.key === promptKey);

  if (!prompt) {
    throw new Error('Invalid prompt key');
  }

  const API_URL = `/api/chatgpt?promptKey=${promptKey}&content=${userContent}`;

  const res = await fetch(API_URL, {
    method: 'POST',
  });
  const data = await res.json();

  const validatedData = chatCompletionSchema.parse(data);

  return validatedData;
};
