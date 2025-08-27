import { ArrowRight } from "lucide-react";

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center space-x-2 bg-badge-bg border border-border rounded-full px-4 py-2 shadow-sm backdrop-blur-sm">
      <span className="text-sm font-medium text-badge-text">
        Introducing Custo
      </span>
      <ArrowRight className="w-4 h-4 text-badge-text" />
    </div>
  );
};

export default HeroBadge;