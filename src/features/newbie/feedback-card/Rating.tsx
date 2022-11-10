type RatingProps = {
  rating: string;
  selectedRating?: string;
};

export function Rating({ rating }: RatingProps) {
  return (
    <div className="w-12 h-12 bg-[#262F38] rounded-full flex-center group hover:bg-[#EA7B35] cursor-pointer">
      <p className="font-semibold text-white/50 group-hover:text-white">
        {rating}
      </p>
    </div>
  );
}
