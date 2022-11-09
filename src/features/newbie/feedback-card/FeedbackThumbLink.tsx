import Link from 'next/link';

// import { useTheme } from '@/hooks';

export function FeedbackThumbLink() {
  // const { isDarkMode } = useTheme();
  return (
    <Link href="newbie/feedback-card">
      <div className="overflow-hidden cursor-pointer rounded shadow relative">
        <div className="h-[20rem] w-auto hover:scale-[1.1] transition-all duration-700 bg-white">
          Feedback Placeholder
        </div>
      </div>
    </Link>
  );
}
