// Reusable animated card
import React from "react";
import GlassCard from "../../ui/GlassCard";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <GlassCard className="p-6 group cursor-pointer">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
        {description}
      </p>
    </GlassCard>
  );
};

export default FeatureCard;
