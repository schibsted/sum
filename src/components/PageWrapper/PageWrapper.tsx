'use client';
import { useState } from 'react';
import { Entry } from '~/types';
import Footer from '../Footer';
import Header from '../Header';
import ResultPage from '../ResultPage';
import StartPage from '../StartPage';

const PageWrapper = () => {
  const [currentPage, setCurrentPage] = useState<'ResultPage' | 'StartPage'>(
    'StartPage'
  );
  const [entries, setEntries] = useState<Array<Entry>>([]);

  return (
    <>
      <Header />
      <main>
        {currentPage === 'StartPage' && (
          <StartPage setEntries={setEntries} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'ResultPage' && (
          <ResultPage
            entries={entries}
            setEntries={setEntries}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default PageWrapper;
