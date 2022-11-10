type RatingProps = {
  rating: string;
};

export function Rating({ rating = '1' }: RatingProps) {
  return (
    <div className="w-12 h-12 bg-[#262F38] rounded-full flex-center">
      <p className="font-semibold text-white/50">{rating}</p>
    </div>
  );
}
