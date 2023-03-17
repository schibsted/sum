import { NextResponse, type NextRequest } from 'next/server';
import openai from '../OpenAI';
import { prompts } from '~/constants';
import { chatCompletionSchema, chatCompletionRequestSchema } from '~/types';

export const POST = async (request: NextRequest) => {
  const url = new URL(request.url);

  const result = chatCompletionRequestSchema.safeParse({
    promptKey: url.searchParams.get('promptKey'),
    content: url.searchParams.get('content'),
  });

  if (!result.success)
    return NextResponse.json({ error: result.error.format() }, { status: 400 });

  const { promptKey, content } = result.data;

  const systemPrompt = prompts.find((p) => p.key === promptKey)!.systemPrompt;

  try {
    const completion = await openai.createChatCompletion({
      model: process.env.OPENAI_GPT_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: content },
      ],
      n: 3,
    });

    const completionResult = chatCompletionSchema.safeParse(completion.data);

    if (!completionResult.success)
      return NextResponse.json(
        { error: completionResult.error.format() },
        { status: 500 }
      );

    const data = completionResult.data;

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: 'ChatGPT API where unable to complete request' },
      { status: 500 }
    );
  }
};
export const revalidate = 0;
