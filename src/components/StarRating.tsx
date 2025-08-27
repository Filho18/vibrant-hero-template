import { Star } from "lucide-react";

const StarRating = () => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className="w-5 h-5 fill-yellow-400 text-yellow-400" 
        />
      ))}
    </div>
  );
};

export default StarRating;