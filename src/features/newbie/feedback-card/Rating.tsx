type RatingRange = '1' | '2' | '3' | '4' | '5';

type RatingProps = {
  rating: RatingRange;
  selectedRating: RatingRange;
  handleSelectRating: (selection: RatingRange) => void;
};

export function Rating({
  rating,
  selectedRating,
  handleSelectRating,
}: RatingProps) {
  const ratingBg = selectedRating === rating ? 'bg-[#7A8898]' : 'bg-[#262F38]';
  const ratingColor =
    selectedRating === rating ? 'text-white' : 'text-white/50';

  return (
    <button
      type="button"
      onClick={() => handleSelectRating(rating)}
      className={`w-14 h-14 ${ratingBg} rounded-full flex-center group hover:bg-[#EA7B35] cursor-pointer`}
    >
      <p className={`font-semibold ${ratingColor} group-hover:text-white`}>
        {rating}
      </p>
    </button>
  );
}
