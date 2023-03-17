import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => (
  <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Siden finnes ikke
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Siden du leter etter er enten flyttet eller eksisterer ikke lenger.
      </p>
      <p className="text-base leading-7 text-gray-600">
        Dersom vi har linket feil, blir vi veldig glade om du sender oss en
        melding.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Gå til forsiden
        </Link>
      </div>
    </div>
  </main>
);

export default NotFound;
