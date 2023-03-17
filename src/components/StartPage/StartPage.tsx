'use client';
import { ChangeEvent, FC, useState } from 'react';
import { Entry } from '~/types';
import { fetchGPT } from '~/utils/fetchGPT';
import { prompts } from '~/constants';
import IntroCard from '../IntroCard';
import { transcribe } from '~/utils/transcribe';

interface Props {
  setCurrentPage: (currentPage: 'ResultPage' | 'StartPage') => void;
  setEntries: (arg: Array<Entry>) => void;
}

const StartPage: FC<Props> = ({ setCurrentPage, setEntries }) => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [promptKey, setPromptKey] = useState<string>('summarize');

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      setLoading(true);
      const transcription = await transcribe(file, text);
      const GPTResponse = await fetchGPT(promptKey, transcription.text);
      setEntries([
        {
          actionName: 'Inndata',
          current: true,
          choices: [transcription.text],
          isAudio: true,
        },
        {
          actionName: prompts.find((p) => p.key === promptKey)?.name || '',
          current: false,
          choices: GPTResponse.choices.map(
            (choice: any) => choice.message.content
          ),
          isAudio: false,
        },
      ]);
      setLoading(false);
      return setCurrentPage('ResultPage');
    } else if (text) {
      setLoading(true);
      const GPTResponse = await fetchGPT(promptKey, text);
      setEntries([
        {
          actionName: 'Inndata',
          current: true,
          choices: [text],
          isAudio: false,
        },
        {
          actionName: prompts.find((p) => p.key === promptKey)?.name || '',
          current: false,
          choices: GPTResponse.choices.map(
            (choice: any) => choice.message.content
          ),
          isAudio: false,
        },
      ]);
      setLoading(false);
      return setCurrentPage('ResultPage');
    }
    return;
  };

  return (
    <>
      <IntroCard
        handleFileUpload={handleFileUpload}
        file={file}
        loading={loading}
        setText={setText}
        text={text}
        handleSubmit={handleSubmit}
        setPromptKey={setPromptKey}
        promptKey={promptKey}
      />
    </>
  );
};

export default StartPage;
