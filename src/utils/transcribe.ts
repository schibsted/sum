import { transcriptionSchema } from '~/types';

export const transcribe = async (file: File, prompt: string) => {
  let APIUrl = '/api/whisper';

  if (prompt) {
    APIUrl += `?prompt=${encodeURIComponent(prompt)}`;
  }

  const res = await fetch(APIUrl, {
    method: 'POST',
    body: file,
  });

  const data = await res.json();

  const validatedData = transcriptionSchema.parse(data);

  return validatedData;
};
