'use client';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { prompts } from '~/constants';

interface Props {
  loading: boolean;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  setText: (text: string) => void;
  text: string;
  handleSubmit: () => void;
  promptKey: string;
  setPromptKey: (key: string) => void;
}

const IntroCard: FC<Props> = ({
  handleFileUpload,
  file,
  loading,
  handleSubmit,
  text,
  setText,
  setPromptKey,
  promptKey,
}) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (file || text.trim()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [file, text]);

  return (
    <section className="flex justify-center bg-blue-50 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="flex w-full max-w-6xl flex-col rounded-lg bg-white px-16 pb-4 pt-16 shadow-lg">
        <div className="max-w-md">
          <span className="text-sm font-bold text-indigo-600">
            AI gjort enkelt
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Innhold forenklet på 1-2-3
          </h2>
          <p className="text-md mt-3 text-gray-500 sm:mt-4">
            Velg hvordan du vil tolke innholdet ditt, legg til en lydfil eller
            skriv inn tekst du vil ha håndtert og la Sum gjøre jobben for deg
          </p>

          <div>
            <label
              htmlFor="action"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Handling
            </label>
            <select
              disabled={loading}
              id="action"
              name="action"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={promptKey}
              onChange={(e) => setPromptKey(e.target.value)}
            >
              {prompts.map((prompt) => (
                <option key={prompt.key} value={prompt.key}>
                  {prompt.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Legg til tekst eller slipp fil
            </label>
            <div className="mt-2">
              <textarea
                disabled={loading}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={7}
                name="text"
                id="text"
                className={`block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 ${
                  loading && 'cursor-wait bg-gray-100'
                }`}
              />
            </div>
          </div>
          <div className="flex flex-row items-start	justify-between">
            <div>
              {file && (
                <>
                  <p className="mt-4 text-sm font-medium text-indigo-600">
                    Lastet opp fil
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {file.name} ({file.size} bytes)
                  </p>
                </>
              )}
            </div>
            <div className="mt-4 flex flex-row items-center gap-4">
              <label
                htmlFor="file-upload"
                className={`cursor-pointer text-indigo-600  ${
                  !!file
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:text-indigo-500'
                } ${loading && 'cursor-wait opacity-50'}`}
              >
                Last opp fil
              </label>
              <input
                disabled={!!file || loading}
                onChange={(e) => handleFileUpload(e)}
                id="file-upload"
                className="sr-only"
                type="file"
              />
              <button
                disabled={disabled || loading}
                onClick={() => !disabled && handleSubmit()}
                type="button"
                className={`rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  disabled
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:bg-indigo-500'
                } ${loading && 'cursor-wait opacity-50'}}`}
              >
                Sum
              </button>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Sum bruker OpenAIs tjenestene ChatGPT og Whisper, se deres{' '}
          <a
            href="https://openai.com/policies/api-data-usage-policies"
            target="_blank"
            className="text-indigo-600 hover:text-indigo-500"
          >
            personvernerklæring her.
          </a>
        </p>
      </div>
    </section>
  );
};

export default IntroCard;
