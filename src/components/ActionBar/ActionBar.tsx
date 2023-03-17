'use client';
import { FC, useState } from 'react';
import { prompts } from '~/constants';
import { Entry } from '~/types';
import { fetchGPT } from '~/utils/fetchGPT';

interface Props {
  entries: Array<Entry>;
  setEntries: (entries: Array<Entry>) => void;
}

const ActionBar: FC<Props> = ({ entries, setEntries }) => {
  const [promptKey, setPromptKey] = useState<string>('summarize');

  const handleSubmit = async () => {
    const gptPrompt = prompts.find((p) => p.key === promptKey);
    const currentEntry = entries.find((e) => e.current);
    const response = await fetchGPT(promptKey, currentEntry?.choices[0] || '');

    setEntries([
      ...entries,
      {
        actionName: gptPrompt?.name || '',
        current: false,
        choices: response.choices.map((choice: any) => choice.message.content),
        isAudio: false,
      },
    ]);
  };

  return (
    <header className="border-y-[1px] border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 ">
        <div className="flex h-16 items-center justify-center gap-3">
          <label
            htmlFor="location"
            className="sr-only block text-sm font-medium leading-6 text-gray-900"
          >
            Velg handling
          </label>
          <select
            value={promptKey}
            onChange={(e) => setPromptKey(e.target.value)}
            id="action"
            name="action"
            className="block w-full max-w-xl rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {prompts.map((prompt) => (
              <option key={prompt.key} value={prompt.key}>
                {prompt.name}
              </option>
            ))}
          </select>
          <div className="flex h-16 items-center justify-center gap-3">
            <button
              onClick={handleSubmit}
              type="button"
              className="rounded-md bg-indigo-600 py-2 px-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sum
            </button>
            <a href="/" className="text-indigo-600 hover:text-indigo-500">
              Start på nytt
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ActionBar;
