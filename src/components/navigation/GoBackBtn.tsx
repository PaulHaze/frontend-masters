import * as React from 'react';

import { useRouter } from 'next/router';

import { FiChevronLeft } from 'react-icons/fi';

export function GoBackBtn() {
  const router = useRouter();
  return (
    <div>
      <button
        className="px-5 py-2 bg-white hover:bg-stone-50 text-slate-500 rounded shadow dark:bg-slate-700 dark:text-white dark:hover:bg-slate-800 text-xs flex-center cursor-pointer"
        onClick={() => router.back()}
      >
        <span className="inline-flex mr-2">
          <FiChevronLeft size="22" />
        </span>
        BACK
      </button>
    </div>
  );
}
