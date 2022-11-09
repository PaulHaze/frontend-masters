import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from '@/hooks';

import CardThumbLight from '@/assets/img/review-card/review-card-light.png';
import CardThumbDark from '@/assets/img/review-card/review-card-dark.png';

export function CardThumbLink() {
  const { isDarkMode } = useTheme();
  return (
    <Link href="newbie/product-card">
      <div className="overflow-hidden cursor-pointer rounded shadow relative">
        <Image
          src={isDarkMode ? CardThumbDark : CardThumbLight}
          alt="Thumbnail link to Review Card Component"
          className="h-[20rem] w-auto hover:scale-[1.1] transition-all duration-700"
          quality={100}
          placeholder="blur"
        />
      </div>
    </Link>
  );
}
