import React from 'react';
import { Card, CardContent } from '../card';
import { Camera } from 'lucide-react';

const GitHubProjectCard = ({ 
  title,
  description,
  lastCommit,
  stars,
  forks,
  image
  // Add any other props we might want to display
}) => {
  return (
    <Card className="w-72 hover:shadow-lg transition-shadow duration-200 bg-white shrink-0">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          {image}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <p className="text-sm text-gray-500 mb-4">Last commit: {lastCommit}</p>
          </div>
        </div>
      </CardContent>
      
      <div className="px-6 pb-6 flex flex-col gap-3">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Camera className="w-4 h-4" />
            {stars}
          </span>
          <span className="flex items-center gap-1">
            <Camera className="w-4 h-4" />
            {forks}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default GitHubProjectCard;