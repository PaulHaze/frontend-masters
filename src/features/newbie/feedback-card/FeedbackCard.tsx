import { Overpass } from '@next/font/google';

const overpass = Overpass({
  weight: 'variable',
  subsets: ['latin'],
});

export function FeedbackCard() {
  return (
    <div
      className={`${overpass.className} flex flex-grow text-white h-[414px] max-w-[412px] mx-auto rounded-[30px] feedback-card-bg`}
    >
      <p className="text-4xl font-semibold">FeedbackCard Placeholder</p>
    </div>
  );
}
