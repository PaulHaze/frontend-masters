type RatingProps = {
  rating: string;
  selectedRating?: string;
};

export function Rating({ rating, selectedRating }: RatingProps) {
  const ratingBg = selectedRating === rating ? 'bg-[#7A8898]' : 'bg-[#262F38]';
  const ratingNumber =
    selectedRating === rating ? 'text-white' : 'text-white/50';
  return (
    <div
      className={`w-12 h-12 ${ratingBg} rounded-full flex-center group hover:bg-[#EA7B35] cursor-pointer`}
    >
      <p className={`font-semibold ${ratingNumber} group-hover:text-white`}>
        {rating}
      </p>
    </div>
  );
}
