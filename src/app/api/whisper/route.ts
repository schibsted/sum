import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import fs from 'node:fs';
import tmp from 'tmp';
import openai from '../OpenAI';
import { transcriptionSchema } from '~/types';

export const POST = async (request: NextRequest) => {
  const url = new URL(request.url);

  const schema = z.object({
    prompt: z.string().min(1).optional().nullable(),
  });

  const result = schema.safeParse({
    prompt: url.searchParams.get('prompt'),
  });

  if (!result.success)
    return NextResponse.json({ error: result.error.format() }, { status: 400 });

  const { prompt } = result.data;

  const body = await request.body;

  const buffer = await new Response(body).arrayBuffer();
  if (!buffer.byteLength || buffer.byteLength === 0)
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });

  // TODO: Super ugly hack. Lets not save files to disk
  const tmpFile = tmp.fileSync({ postfix: '.mp3' });

  fs.writeFileSync(tmpFile.name, Buffer.from(buffer));

  try {
    const res = await openai.createTranscription(
      fs.createReadStream(tmpFile.name) as any,
      'whisper-1',
      prompt || undefined,
      'verbose_json'
    );

    const createTranscriptionResult = transcriptionSchema.safeParse(res.data);

    if (!createTranscriptionResult.success)
      return NextResponse.json(
        { error: createTranscriptionResult.error.format() },
        { status: 500 }
      );

    const transcription = createTranscriptionResult.data;

    return NextResponse.json(transcription, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: 'Whiper API where unable to complete request' },
      { status: 500 }
    );
  } finally {
    tmpFile.removeCallback();
  }
};
export const revalidate = 0;
