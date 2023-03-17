'use client';
import { FC, useState } from 'react';
import { Entry } from '../../types';

interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry: { current, choices, actionName } }) => {
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(0);

  // turn \n into <br />

  return (
    <article
      className={`flex justify-center py-8 ${
        current ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      <div className="w-full max-w-3xl">
        <span className="text-sm text-indigo-600">Sum</span>
        <h1 className="text-4xl font-bold">{actionName}</h1>
        <p className="mt-4 text-gray-500">
          Antall ord: {choices[selectedChoiceIndex].split(' ').length}
        </p>
        <p className="text-gray-500">
          Antall tegn: {choices[selectedChoiceIndex].length}
        </p>

        <p className="text-md mt-4 whitespace-pre-wrap">
          {choices[selectedChoiceIndex]}
        </p>

        <hr className="mt-8" />

        {choices.length >= 1 && choices.length > selectedChoiceIndex + 1 && (
          <button
            onClick={() =>
              setSelectedChoiceIndex((prev) => {
                return prev + 1;
              })
            }
            className="mt-4 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
};

export default EntryCard;
