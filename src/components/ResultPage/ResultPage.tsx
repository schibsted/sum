'use client';

import { FC } from 'react';
import { Entry } from '~/types';
import ActionBar from '../ActionBar';
import EntryCard from '../EntryCard';

interface Props {
  setCurrentPage: (currentPage: 'ResultPage' | 'StartPage') => void;
  entries: Array<Entry>;
  setEntries: (entries: Array<Entry>) => void;
}

const ResultPage: FC<Props> = ({ entries, setEntries }) => {
  return (
    <>
      <ActionBar entries={entries} setEntries={setEntries} />
      <section>
        {entries.map((entry) => (
          <EntryCard key={JSON.stringify(entry.choices)} entry={entry} />
        ))}
      </section>
    </>
  );
};

export default ResultPage;
