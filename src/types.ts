import { z } from 'zod';
import { prompts } from './constants';

export interface Entry {
  actionName: string;
  current: boolean;
  choices: Array<string>;
  isAudio: boolean;
}

export const chatCompletionSchema = z
  .object({
    id: z.string(),
    object: z.string(),
    created: z.number(),
    model: z.string(),
    usage: z.object({
      prompt_tokens: z.number(),
      completion_tokens: z.number(),
      total_tokens: z.number(),
    }),
    choices: z.array(
      z.object({
        message: z.object({ role: z.string(), content: z.string() }),
        finish_reason: z.string(),
        index: z.number(),
      })
    ),
  })
  .strip();

export const chatCompletionRequestSchema = z.object({
  promptKey: z
    .string()
    .trim()
    .refine((key) => prompts.some((p) => p.key === key), {
      message: 'Invalid promptKey',
    }),
  content: z.string().trim().min(1),
});

export const transcriptionSchema = z.object({
  task: z.string(),
  language: z.string(),
  duration: z.number().positive(),
  segments: z.array(
    z.object({
      id: z.number(),
      seek: z.number(),
      start: z.number(),
      end: z.number(),
      text: z.string(),
      tokens: z.array(z.number()),
      temperature: z.number(),
      avg_logprob: z.number(),
      compression_ratio: z.number(),
      no_speech_prob: z.number(),
      transient: z.boolean(),
    })
  ),
  text: z.string(),
});
